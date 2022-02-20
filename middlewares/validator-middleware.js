import { validationResult } from "express-validator";
import { ResponseService as RS } from "../services";

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return RS.invalidInput(res, "Invalid input!", { errors: errors.array() });
  }
  next();
};

export default handleValidationErrors;