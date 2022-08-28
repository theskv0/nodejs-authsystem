import path from "path";
import { User } from '../../models'

export const authenticateUser = async (req, res) => {
   // try {
   let user = await User.findOne({ username: req.body.username });
   if (await user.comparePassword(req.body.password)) {
      let token = await user.generateAccessTokenn();
      res.cookie('token', token, {
         sameSite: 'Strict',
         maxAge: 1000 * 60 * 60 * 24 * 30,
         httpOnly: true
         // secure: true, // https only
      });
      return res.status(200).json({
         message: "Success!",
         data: {}
      });
   }
   return res.status(422).json({
      message: "Authentication failed!",
      errors: [{
         param: 'password',
         msg: 'Password does not match!'
      }]
   });
   // } catch (err) {
   //    console.log(err);
   //    return res.status(500).json({
   //       message: "An error occurred!"
   //    });
   // }
}

export const registerUser = async (req, res) => {
   try {
      let user = new User({
         ...req.body,
         verified: true,
      });
      await user.save();
      return res.status(201).json({
         message: "User created!",
         data: user
      });
   } catch (err) {
      console.log(err);
      return res.status(500).json({
         message: "An error occurred!"
      });
   }
}