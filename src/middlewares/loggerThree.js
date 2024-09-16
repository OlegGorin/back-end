const loggerThree = (request, response, next) => {
  console.log("Readers");
  next();
};

module.exports = loggerThree;
