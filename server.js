const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const compression = require('compression');
const signUpApi = require('./routes/signup/signup.route');
const loginApi = require('./routes/login/login.route');
const otpRoute = require('./routes/otp/otp.route');
const postRoute = require('./routes/AWS-File-Upload/file-upload/file-upload.route');
const getAllPostRoute = require('./routes/AWS-File-Upload/get-posts/get-all-posts');
const authenticateToken = require('./functions/authenticateToken');
const fieldValidator = require('./controller/sampleValidator/fieldValidation');
const validator = require('./validators/AWS/File-upload/file-upload');

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
app.use('/api/v2/posts', postRoute);
app.use('/api/v2/posts', getAllPostRoute);

app.listen(PORT || 7777, () => {
  console.log(`server is listening at port ${PORT || 7777}`);
});

module.exports = app;
