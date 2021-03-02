const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String
});

userSchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}


const User = mongoose.model('User', userSchema);

module.exports = User;
