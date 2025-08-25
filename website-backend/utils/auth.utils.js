require("dotenv").config({ path: "../.env" });
const axios = require("axios");
const connection = require("../database/connection");

const STATUS = require("../shared-utils/status-code");
const logger = require("../shared-utils/logging");

const validate_access_token = async (token, user_id) => {
  const root = process.env.GTAM_API_URL;
  const headers = {
    UserId: user_id,
    Token: token,
  };
  try {
    const response = await axios.post(
      `${root}Validate/Session`,
      {},
      { headers }
    );
    if (response.status === STATUS.OK) {
      return res.status(STATUS.OK).json({
        message: "Success",
        data: response.data,
      });
    } else {
      return res.status(STATUS.UNAUTHORIZED).json({
        message: "Unauthorized",
        error: response.data,
      });
    }
  } catch (error) {
    logger.error('Internal Server Error: ' + error.message);
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const clear_storage_cookies = async (session_domain) => {
  const expiration = new Date(0); // January 1, 1970
  const secure = req.protocol === "https";
  const sessionDomain = req.body.SessionDomain || "/";

  Object.keys(req.cookies).forEach((name) => {
    res.clearCookie(name, {
      expires: expiration,
      path: "/",
      domain: sessionDomain,
      secure: secure,
      httpOnly: true,
    });
  });
  // Find all keys in localStorage starting with 'msal' and remove them
  const msalKeys = Object.keys(localStorage).filter((key) =>
    key.startsWith("msal")
  );
  msalKeys.forEach((key) => {
    localStorage.removeItem(key);
  });

  // Find all keys in sessionStorage starting with 'msal' and remove them
  const msalSessionKeys = Object.keys(sessionStorage).filter((key) =>
    key.startsWith("msal")
  );
  msalSessionKeys.forEach((key) => {
    sessionStorage.removeItem(key);
  });

  // Remove the msal.isMicrosoftLogin cookie
  res.clearCookie("msal.isMicrosoftLogin", {
    expires: new Date(0),
    domain: session_domain,
    httpOnly: true,
  });
};

const destroy_session = async (session_domain) => {
  const table_name = process.env.DB_TABLE || "custom_sessions";
  const session_id = req.session.id;

  await this.clear_storage_cookies(session_domain);
  req.session.invalidate();
  req.session.flush();
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect("/login");
    }
  });

  connection.query(
    "DELETE FROM " + table_name + " WHERE id = ?",
    [session_id],
    (error, results) => {
      if (error) {
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
          message: "Internal Server Error",
          error: error.message,
        });
      }
      req.session.destroy();
      return res.status(STATUS.OK).json({
        message: "Logout successful",
      });
    }
  );
};
module.exports = {
  validate_access_token,
  clear_storage_cookies,
  destroy_session,
};
