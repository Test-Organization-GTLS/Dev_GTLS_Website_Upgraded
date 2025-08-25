// env variables
require('dotenv').config({ path: './.env' })
const express = require('express')
const cors = require('cors')
const session = require('express-session');
const csrf = require('csurf');

const connection = require('./database/connection')
const authenticate = require('./middleware/auth.middleware')
const ServerError = require('./shared-utils/error')


// Import the routes
const authRoutes = require('./routes/auth.route')


// Initialize server
const app = express()

// configuration
const logger = require('./shared-utils/logging')
const port = process.env.PORT || 3000
const secretKey = process.env.SECRET_KEY

// Connect to MySQL
try {
  connection.connect();
} catch (err) {
  logger.error('Error connecting to MySQL: ' + err.message);
  console.error('Error connecting to MySQL:', err);
}

// Set up session middleware
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


// Middleware

// 1- Cors
app.use(cors())

// 2- Logger Middleware
app.use((req, res, next) => {
    logger.info(`[${req.method}] ${req.url}`)
    next()
})

// 3- Body Parser
app.use(express.json({ limit: '20kb' }))
app.use(express.urlencoded({ extended: true, limit: '20kb' }))

// 4- Set up CSRF protection
const csrfProtection = csrf();
// Use CSRF protection for all routes
app.use(csrfProtection);

// 5- Use the authentication middleware for all routes
// app.use(authenticate);


// Routes

app.get("/health",(req,res) => {
    return res.send("Hello world")
})

// Use the imported routes
app.use('/auth', authenticate, authRoutes);


// Start the server
app.listen(port, () => {
  console.log(`server is running on port ${port}...`)
})

// Collect Errors
app.all('/*splat', (req, res, next) => {
    next(new ServerError(`Can't find ${req.originalUrl} on this server!`, 404))
})

module.exports = app