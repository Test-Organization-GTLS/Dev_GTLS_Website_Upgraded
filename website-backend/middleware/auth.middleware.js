const validate_access_token = require("../utils/auth.utils");

const auth_routes = [
  "health",
  "login",
  "logout",
  "/auth/login",
  "/auth/logout",
  "/forgot-password",
  "/auth/azure/callback",
  "/auth/microsoft-token",
  "/auth/logout-without-request",
];
const authenticate = (req, res, next) => {
  const path = req.path;
  const hasSession = req.session;
console.log(path, hasSession)
  // Allow access to base url
  if (path == "") {
    return next();
  } else if (hasSession) {
    const token = req.session.token;
    const user_id = req.session.user?.UserId;
    const is_valid_token =
      token && user_id ? validate_access_token(token, user_id) : false;

    // Check if token is valid
    if (is_valid_token.status !== 200) {
      return res.redirect("/login");
    }
  } else {
    // Allow access to specific routes without session
    const is_accessing_auth_route = auth_routes.includes(path) ? true : false;
    if (is_accessing_auth_route) {
      return next();
    } else {
      return res.redirect("/login");
    }
  }

  return next();
};

module.exports = authenticate;
