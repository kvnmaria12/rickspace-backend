const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const compression = require('compression');
const signUpApi = require('./routes/signup/signup.route');
const loginApi = require('./routes/login/login.route');
const otpRoute = require('./routes/otp/otp.route');
const postRoute = require('./routes/file-upload/file-upload.route');
const authenticateToken = require('./functions/authenticateToken');

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

dotenv.config();

const PORT = process.env.PORT;

app.get('/', authenticateToken, (req, res) => {
  // res.send('Hello from Node js');
});

app.use('/api/v2/auth/user', signUpApi);
app.use('/api/v2/auth/user', loginApi);
app.use('/api/v2/auth/otp', otpRoute);
app.use('/api/v2/post', postRoute);

app.listen(PORT || 7777, () => {
  console.log(`server is listening at port ${PORT || 7777}`);
});

module.exports = app;
