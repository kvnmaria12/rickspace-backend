exports.sendResponseObj = (statusCode, responseCode, message, res, output) => {
  res.status(statusCode).json({
    responseCode: responseCode,
    message: message,
    data: output,
  });
};
