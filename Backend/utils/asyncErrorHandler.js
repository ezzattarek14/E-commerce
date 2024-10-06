const CustomError = require("./CustomError");

//this is a custom controller used to control async function errors to prevent code repetition
module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => {
      const error = new CustomError(err.message, 400, "Bad request");
      next(error);
    });
  };
};
