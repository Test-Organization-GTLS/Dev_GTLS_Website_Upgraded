require("dotenv").config({ path: "./.env" });
const { validationResult, destroy_session } = require("express-validator");
const connection = require("../database/connection");
const axios = require("axios");

const STATUS = require("../shared-utils/status-code");
const logger = require("../shared-utils/logging");

const Employee = require("../models/Employee");
const Customer = require("../models/Customer");
const Driver = require("../models/Driver");

class AuthController {
  async login(req, res) {
    const parameters = req.headers;
    const userObject = JSON.parse(parameters.userobject);
    const token = parameters.token;
    const db_table = process.env.DB_TABLE || "custom_sessions";
 
    if (userObject && token) {
      // Generate Session using user id and owner id
      const userId = userObject.UserId;

      req.session.token = token;
      req.session.user = userObject;
      req.session.userId = userId;
      req.session.newRoute = "/loginapi";

      const sessionId = req.session.id;
      const user = JSON.stringify(userObject);

      const lastActivity = Date.now() / 1000;
      const query = `INSERT INTO ${db_table} (id, user_id, payload, user, last_activity, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`;

      connection.query(
        query,
        [sessionId, userId, token, user, lastActivity],
        (err, results) => {
          if (err) {
            console.log("Error running query:", err);
            logger.error('Error running query: ' + err);
            return res.status(STATUS.CONFLICT).json({
              user: null,
              token: null,
              status: STATUS.CONFLICT,
              message: errorMessage,
            });
          }
          req.session.save();
          if (req.session.newRoute && req.session.user) {
            return res.status(STATUS.OK).json({
              user: user,
              token: token,
              status: STATUS.OK,
              message: "Login successful",
            });
          }
        }
      );
    } else {
      const errorMessage = "Something went wrong, try again later";
      logger.error('Internal Server Error');
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
        user: null,
        token: null,
        status: STATUS.INTERNAL_SERVER_ERROR,
        message: errorMessage,
      });
    }
  }

  async azureCallback(req, res) {
    const parameters = req.headers;
    const userObject = JSON.parse(parameters.userobject);
    const token = parameters.token;
    const db_table = process.env.DB_TABLE || "custom_sessions";

    if (userObject && token) {
      // Generate Session using user id and owner id
      const userId = userObject.UserId;

      req.session.token = token;
      req.session.user = userObject;
      req.session.userId = userId;
      req.session.newRoute = "/loginapi";

      const sessionId = req.session.id;
      const user = JSON.stringify(userObject);

      const lastActivity = Date.now() / 1000;
      const query = `INSERT INTO ${db_table} (id, user_id, payload, user, last_activity, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`;

      connection.query(
        query,
        [sessionId, userId, token, user, lastActivity],
        (err, results) => {
          if (err) {
            console.error("Error running query:", err);
            logger.error('Error running query: ' + err);
            return res.status(STATUS.CONFLICT).json({
              user: null,
              token: null,
              status: STATUS.CONFLICT,
              message: errorMessage,
            });
          }
          req.session.save();
          if (req.session.newRoute && req.session.user) {
            res.status(STATUS.OK).json({
              user: user,
              token: token,
              status: STATUS.OK,
              message: "Login successful",
            });
          }
        }
      );
    } else {
      const errorMessage = "Something went wrong, try again later";
      logger.error('Internal Server Error');
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
        user: null,
        token: null,
        status: STATUS.INTERNAL_SERVER_ERROR,
        message: errorMessage,
      });
    }
  }

  async logout(req, res) {
    const parameters = req.headers;

    const session_domain = parameters.sessiondomain || "/";
    const user = parameters.user;
    const root = parameters.url;

    if (!user) {
      return res.status(STATUS.OK).json({
        message: "Logout successful",
      });
    }

    await axios
      .get(
        `${root}Logout`,
        {},
        {
          headers: { UserId: user.UserId, Token: user.Token },
        }
      )
      .then(async (response) => {
        await destroy_session(session_domain);
        return res.status(STATUS.OK).json({
          message: "Logout successful",
        });
      })
      .catch((error) => {
        logger.error('Internal Server Error: ' + error.message);
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
          message: "Internal Server Error",
          error: error.message,
        });
      });
  }

  async microsoftToken(req, res) {
    const parameters = req.headers;
    const access_token = parameters.socialiteuser.accessToken;

    const root = parameters.URL;
    const headers = {
      Authorization: access_token,
    };

    axios
      .post(`${root}validate/MicrosoftToken`, {}, { headers })
      .then((response) => {
        if (response.status == STATUS.OK) {
          const responseJson = response.data;
          const userObject = responseJson.user;
          const token = responseJson.access_token;
          const userId = userObject.UserId;

          req.session.regenerate();
          req.session.token = token;
          req.session.user = Array.isArray(userObject)
            ? JSON.stringify(userObject)
            : userObject;
          req.session.userId = userId;
          req.session.newRoute = "/azure/login";

          const sessionId = req.session.id;
          const lastActivity = Date.now() / 1000;

          const query = `INSERT INTO custom_sessions (id, user_id, payload, user, last_activity, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`;
          connection.query(
            query,
            [
              sessionId,
              userId,
              token,
              Array.isArray(userObject)
                ? JSON.stringify(userObject)
                : userObject,
              lastActivity,
            ],
            (err, results) => {
              if (err) {
                console.error("error running query:", err);
                return;
              }
              req.session.save();
              return res.status(STATUS.OK).json({
                message: "Login successful",
                access_token: accessToken,
                expires_in: expiresIn,
                user: Array.isArray(userObject)
                  ? JSON.stringify(userObject)
                  : userObject,
              });
            }
          );
        } else {
          if (
            response.data.Message.includes(
              "Error while validating token: Code: InvalidAuthenticationToken"
            )
          ) {
            return res.status(STATUS.UNAUTHORIZED).json(
              {
                Message:
                  "Error while validating token: Invalid Authentication Token",
                error: response.data,
              },
              STATUS.UNAUTHORIZED
            );
          } else {
            return res.status(STATUS.INTERNAL_SERVER_ERROR).json(
              {
                Message: response.data.Message || "Authentication error",
                error: response.data,
              },
              STATUS.INTERNAL_SERVER_ERROR
            );
          }
        }
      })
      .catch((error) => {
        console.error(error);
        logger.error('Internal Server Error: ' + error.message);
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(
          {
            Message: "Authentication error",
            error: error,
          },
          STATUS.INTERNAL_SERVER_ERROR
        );
      });
  }

  async logoutWithoutRequest(req, res) {
    try {
      // Check if user is found in session
      if (req.session.user) {
        // Remove user from session
        delete req.session.user;
      }

      // Check if token is found in session
      if (req.session.token) {
        // Remove token from session
        delete req.session.token;
      }

      // Invalidate and flush the session
      req.session.invalidate();
      req.session.flush();

      // Regenerate the session token
      req.session.regenerate((err) => {
        if (err) {
          throw err;
        }
      });

      return res.status(STATUS.OK).json(
        {
          message: "Logout Successfully",
        },
        STATUS.OK
      );
    } catch (err) {
      logger.error('Internal Server Error: ' + err.message);
      return res.status(STATUS.INTERNAL_SERVER_ERROR).json(
        {
          message: "Logout failed. Please try again. " + err.message,
        },
        STATUS.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getCurrentUser(req, res) {
    const errors = validationResult(req);
    const table_name = process.env.DB_TABLE || "custom_sessions";
    if (!errors.isEmpty()) {
      logger.error('Bad Request: ' + errors.array());
      return res.status(STATUS.BAD_REQUEST).json({ errors: errors.array() });
    }
    if (req.session.user) {
      const session_id = req.session.id;
      const user = connection.query(
        "SELECT * FROM " + table_name + " WHERE id = ?",
        [session_id],
        (error, results) => {
          if (error) {
            return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
              message: "Internal Server Error",
              error: error.message,
            });
          }
          if (results.length > 0) {
            return res.status(STATUS.OK).json({
              message: "Success",
              data: results[0],
            });
          } else {
            return res.status(STATUS.NOT_FOUND).json({
              message: "User not found",
            });
          }
        }
      );
      if (user) {
        // Decode the user since it is a string
        const decoded_user = JSON.parse(user);
        let logged_in_user = null;
        if (user.TypeId == 1) {
          // The user is a customer
          logged_in_user = new Customer(
            decoded_user.UserId,
            decoded_user.TypeId,
            decoded_user.TypeName,
            decoded_user.OwnerId,
            decoded_user.PhoneNumber,
            decoded_user.CustomerName,
            decoded_user.Picture,
            decoded_user.Username,
            decoded_user.Email
          );
        } else if (user.TypeId == 2) {
          // The user is an employee
          logged_in_user = new Employee(
            decoded_user.UserId,
            decoded_user.TypeId,
            decoded_user.TypeName,
            decoded_user.OwnerId,
            decoded_user.PhoneNo,
            decoded_user.FirstName,
            decoded_user.LastName,
            decoded_user.Picture,
            decoded_user.Username,
            decoded_user.Email,
            decoded_user.Address,
            decoded_user.Dob,
            decoded_user.NationalityId,
            decoded_user.NationalityName,
            decoded_user.BranchId,
            decoded_user.RoleId,
            decoded_user.RoleName,
            decoded_user.ReportToId,
            decoded_user.ReportToName,
            decoded_user.HiringDate,
            decoded_user.StateId,
            decoded_user.StateName
          );
        } else if (user.TypeId == 3) {
          // The user is a driver
          logged_in_user = new Driver(
            decoded_user.UserId,
            decoded_user.TypeId,
            decoded_user.TypeName,
            decoded_user.truckNbr,
            decoded_user.location,
            decoded_user.driverNbr,
            decoded_user.Username,
            decoded_user.Email,
            decoded_user.phoneNbr
          );
        } else {
          return res
            .status(STATUS.INTERNAL_SERVER_ERROR)
            .json({ message: "Internal Server Error" });
        }

        if (logged_in_user) {
          return res.status(STATUS.OK).json({
            token: req.session.token,
            user: logged_in_user,
          });
        }
      } else {
        return res.status(STATUS.NOTFOUND).json({ message: "User not found" });
      }
    } else {
      return res.status(STATUS.UNAUTHORIZED).json({ message: "Unauthorized" });
    }
  }
}

module.exports = new AuthController();
