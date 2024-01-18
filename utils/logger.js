const winston = require('winston');

const { combine, timestamp, prettyPrint, colorize } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), prettyPrint(), colorize({ all: true })),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
