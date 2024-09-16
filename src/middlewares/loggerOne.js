const loggerOne = (request, response, next) => {
  console.log("Main");
  next();
};

module.exports = loggerOne;