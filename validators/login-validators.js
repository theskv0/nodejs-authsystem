import { check } from 'express-validator';
import { User } from './../models';

const username = check('username')
   .not()
   .isEmpty()
   .withMessage('Username is required.')
   .custom(value => {
      return User.findOne({ username: value })
         .then(user => {
            if(!user) return Promise.reject('Username not exists.')
         })
   });

const password = check('password')
   .not()
   .isEmpty()
   .withMessage('Password is required.')

export const AuthenticateValidations = [username, password];