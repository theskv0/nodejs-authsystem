import { check } from 'express-validator';

const name = check('name', 'Name is required.').not().isEmpty();
const username = check('username', 'Username is required.').not().isEmpty();
const email = check('email', 'Please provide a valid email address.').isEmail();
const password = check(
   'password',
   'Password is required of minimum length of 8 charactors.'
).not().isLength(8);

export const RegistrationValidations = [name, username, email, password];
export const AuthenticationValidations = [username, password];