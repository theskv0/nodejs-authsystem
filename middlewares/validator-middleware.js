import { validationResult } from "express-validator";

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Invalid input!",
      errors: errors.array()
    });
  }
  next();
};

export default handleValidationErrors;