const winston = require('winston');

const { combine, timestamp, label, prettyPrint, colorize } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    prettyPrint(),
    colorize({ all: true })
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
