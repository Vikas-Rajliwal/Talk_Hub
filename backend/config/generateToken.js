const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "vikasRajliwal2004", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
