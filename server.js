const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const compression = require('compression');
const { authenticateToken } = require('./functions/authenticateToken');
const helmet = require('helmet');
const limiter = require('./utils/limiter');
const {
  signUpApi,
  loginApi,
  otpRoute,
  postRoute,
  getAllPostRoute,
  restPasswordRoute,
  followRoute,
  unFollowRoute,
  likeRoute,
  disLikeRoute,
  commentsRoute,
} = require('./utils/file-exports');

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(limiter);

dotenv.config();

const PORT = process.env.PORT;

app.get('/', authenticateToken, (req, res) => {
  res.send('Hello from Node js');
});

app.use('/api/v2/auth/user', signUpApi);
app.use('/api/v2/auth/user', loginApi);
app.use('/api/v2/auth/user', authenticateToken, restPasswordRoute);
app.use('/api/v2/auth/otp', otpRoute);
app.use('/api/v2/post', postRoute);
app.use('/api/v2/posts', getAllPostRoute);
app.use('/api/v2/user', followRoute);
app.use('/api/v2/user', unFollowRoute);
app.use('/api/v2/user/post', likeRoute);
app.use('/api/v2/user/post', disLikeRoute);
app.use('/api/v2/post/', commentsRoute);

app.listen(PORT || 7779, () => {
  console.log(`server is listening at port ${PORT || 7779}`);
});

module.exports = app;
