const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userApi = require('./routes/user/user.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello from Node js');
});

app.use('/api/user', userApi);

app.listen(process.env.PORT || 5000, () => {
  console.log('server is listening at port 5000');
});

module.exports = app;
