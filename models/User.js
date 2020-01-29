const mongoose = require("mongoose");
const md5 = require("md5");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Post"
  }
});
// create and add avatar to user
// UserSchema.pre("save", function(next) {
//   this.avatar = `http://gravatar.com/avatar/${md5(this.username)}?d=identicon`;
//   next();
// });
// Hash password
UserSchema.pre("save", function(next) {
  // wenn es noch kein passwort gibt
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(11, (err, salt) => {
    if (err) return next();

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
