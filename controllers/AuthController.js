import path from "path";

export const authenticateUserView = (req, res) => {
   return res.sendFile(path.join(ViewDir, '/login.html'));
}