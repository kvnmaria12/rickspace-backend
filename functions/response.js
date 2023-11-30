exports.sendResponseObj = (statusCode, responseCode, message, output, res) => {
  res.status(statusCode).json({
    responseCode: responseCode,
    message: message,
    data: output,
  });
};
