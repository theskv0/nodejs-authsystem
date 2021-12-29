import path from "path";
import { User } from './../models'

export const authenticateUserView = (req, res) => {
   return res.sendFile(path.join(ViewDir, '/login.html'));
}

export const authenticateUser = (req, res) => {
   return res.sendFile(path.join(ViewDir, '/login.html'));
}

export const registerUserView = (req, res) => {
   return res.sendFile(path.join(ViewDir, '/register.html'));
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
   } catch(err) {
      console.log(err);
      return res.status(500).json({
         message: "An error occurred!"
      });
   }
}