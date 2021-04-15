const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");

  //   Check if the token exist
  if (!token) {
    //   unauthorized code
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    //   verify token 
      const decoded = jwt.verify(token, config.get('jwtSecret'))
      req.user = decoded.user;
      next()
  } catch (error) {
      //   unauthorized code
    res.status(401).json({ message: "Token is not valid" });
  }
};
