const loggerTwo = (request, response, next) => {
  console.log("Books");
  next();
};

module.exports = loggerTwo;