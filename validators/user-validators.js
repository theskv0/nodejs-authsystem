import { check } from 'express-validator';
import { User } from './../models';

const name = check('name')
   .not()
   .isEmpty()
   .withMessage('Name is required.')
   .bail()
   .isAlpha('en-US', {ignore: ' '})
   .withMessage('Name must contains only alphabetic charactors.')
   .bail()
   .isLength({min: 3, max: 64})
   .withMessage('Name must be minimum of 3 and maximum of 64 charactors long.');

const username = check('username')
   .not()
   .isEmpty()
   .withMessage('Username is required.')
   .bail()
   .isLength({ min: 3, max: 20 })
   .withMessage('Username must be minimum of 3 and maximum of 20 charactors long.')
   .custom(value => {
      return User.findOne({ username: value })
         .then(user => {
            if(user) return Promise.reject('Username already taken.')
         })
   });

const email = check('email')
   .not()
   .isEmpty()
   .withMessage('Email is required.')
   .bail()
   .isEmail()
   .withMessage('Please provide a valid email address.')
   .custom(value => {
      return User.findOne({ email: value })
         .then( user => {
            if (user) return Promise.reject('Email already taken.')
         })
   });

const password = check('password')
   .not()
   .isEmpty()
   .withMessage('Password is required.')
   .bail()
   .isLength({min: 8, max: 20})
   .withMessage('Password is required of minimum length of 8 charactors.');

export const RegisterValidations = [name, username, email, password];
export const ResetPassword = [password];