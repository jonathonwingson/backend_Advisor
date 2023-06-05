// imports json web token module to authenticate token
const jwt = require("jsonwebtoken");

/**
 * Requests header from request and authenticates it. If valid, returns the staff payload.
 * @param {Object} req contains information about the HTTP request made
 * @param {Object} res contains information about the HTTP response received
 * @param {Object} next passes control to next function
 * @returns staff payload
 */
module.exports = async (req, res, next) => {
    try {
        const token = req.header("token");

        if (!token) {
            return res.status(403).json("Not Authorized!");
        }
        const payload = jwt.verify(token, process.env.staffSecret);

        req.user = payload.user;
        next();
    }
    catch (err) {
        console.error("Error: ", err.message);
        return res.status(403).json("Not Authorized");
    }
}
