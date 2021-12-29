import { check } from 'express-validator';

const name = check('name')
   .exists()
   .withMessage('Name is required.')
   .bail()
   .isAlpha('en-US', {ignore: ' '})
   .withMessage('Name must contains only alphabetic charactors.')
   .bail()
   .isLength({min: 3, max: 64})
   .withMessage('Name must be minimum of 3 and maximum of 64 charactors long.');

const username = check('username')
   .exists()
   .withMessage('Username is required.')
   .bail()
   .isLength({min: 3, max: 20})
   .withMessage('Username must be minimum of 3 and maximum of 20 charactors long.');

const email = check('email')
   .exists()
   .withMessage('Email is required.')
   .bail()
   .isEmail()
   .withMessage('Please provide a valid email address.');

const password = check('password')
   .exists()
   .withMessage('Password is required.')
   .bail()
   .isLength({min: 8, max: 20})
   .withMessage('Password is required of minimum length of 8 charactors.');

export const RegisterValidations = [name, username, email, password];
export const AuthenticateValidations = [username, password];
export const ResetPassword = [password];