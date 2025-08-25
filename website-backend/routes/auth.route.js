const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

// Login
router.post(
  "/login",
  AuthController.login.bind(AuthController)
);

// Azure Callback
router.post(
  "/azure/callback",
  AuthController.azureCallback.bind(AuthController)
);

// Logout
router.post(
  "/logout",
  AuthController.logout.bind(AuthController)
);

// Microsoft Token
router.post(
  "/microsoft-token",
  AuthController.microsoftToken.bind(AuthController)
);

// Logout without Request
router.post(
  "/logout-without-request",
  AuthController.logoutWithoutRequest.bind(AuthController)
);

// User Retrieve
router.get(
  "/users",
  AuthController.getCurrentUser.bind(AuthController)
);

module.exports = router;
