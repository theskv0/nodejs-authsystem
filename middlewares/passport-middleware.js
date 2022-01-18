import passport from 'passport';
import { User } from '../models';
import { APP_SECRET } from '../configs';
import { Strategy, ExtractJwt } from 'passport-jwt';

const options = {
   secretOrKey: APP_SECRET,
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

passport.use(new Strategy(options, async ({ id }, done) => {
   try {
      let user = User.findById(id);
      if (!user) {
         throw new Error('User not found.');
      }
      return done(null, user.getUserInfo());
   } catch (err) {
      return done(null, false)
   }
}));