import { pick } from 'lodash';
import { sign } from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import { APP_SECRET } from '../configs';
import { hash, compare } from 'bcryptjs'
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   username: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   verified: {
      type: Boolean,
      default: false
   },
   emailVerificationToken: {
      type: String,
      required: false
   },
   passwordResetToken: {
      type: String,
      required: false
   },
   passwordResetExpiresIn: {
      type: Date,
      required: false
   },
}, { timestamps: true });

UserSchema.pre('save', async function (next) { 
   let user = this;
   if (!user.isModified('password')) return next();
   user.password = await hash(user.password, 10);
   next();
});

UserSchema.methods.comparePassword = async function (password) {
   return await compare(password, this.password);
};

UserSchema.methods.generateAccessToken = async function () {
   const payload = {
      id: this._id,
      name: this.name,
      username: this.username,
      email: this.email,
   };
   return await sign(payload, APP_SECRET, { expiresIn: '1 day' });
};

UserSchema.methods.generatePasswordResetToken = function () {
   this.passwordResetExpiresIn = Date.now() + 36000000; // 1 hour
   this.passwordResetToken = randomBytes(20).toString('hex');
};

UserSchema.methods.getUserInfo = function () {
   return pick(this, ['_id', 'name', 'username', 'email']);
};

const User = model('users', UserSchema);

export default User;