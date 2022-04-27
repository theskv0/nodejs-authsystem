import passport from 'passport';
import { User } from '../models';
import { APP_SECRET, APP_URL } from '../configs';
import { ResponseService as RS } from '../services';
import { Strategy, ExtractJwt } from 'passport-jwt';

export const Authenticate = async (req, res, next) => {
   if (req.cookies.token) {
      return next();
   }
   if (req.accepts('html')) {
      res.redirect(APP_URL);
   } else {
      RS.unauthenticated(res);
   }
   return;
}