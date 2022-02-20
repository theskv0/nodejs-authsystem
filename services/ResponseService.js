
export const success = (res, message, data) => {
   return _response(res, 200, message, data);
}

export const created = (res, message, data) => {
   return _response(res, 201, message, data);
}

export const unauthenticated = (res) => {
   return _response(res, 401, 'Unauthenticated!', {});
}

export const forbidden = (res) => {
   return _response(res, 403, 'Access denied!', {});
}

export const notFound = (res) => {
   return _response(res, 404, 'Endpoint not found!', {});
}

export const invalidInput = (res, message, data) => {
   return _response(res, 422, message, data);
}

export const serverError = (res) => {
   return _response(res, 500, 'Server error!', {});
}

const _response = (res, statusCode, message, data) => {
   return res.status(statusCode).json({
      message: message,
      data: data
   });
}