const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const userApi = require('./routes/user/user.route');
const loginApi = require('./routes/login/login.route');

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello from Node js');
});

app.use('/api/v2', userApi);
app.use('/api/v2', loginApi);

app.listen(process.env.PORT || 5000, () => {
  console.log('server is listening at port 5000');
});

module.exports = app;
