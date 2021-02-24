const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();



const PORT = 8080;
const HOST = '0.0.0.0';


mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo is connected');

  const firstUser = new User({ name: 'First User' });

  firstUser.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });

  User.find(function (err, users) {
    if (err) {
      return console.error(err);
    }
    console.log(users);
  });

});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);

console.log(`Server is running on http://${HOST}:${PORT}`);
