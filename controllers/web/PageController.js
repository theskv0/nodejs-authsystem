import path from "path";

export const authenticateUserView = (req, res) => {
   return res.sendFile(path.join(ViewDir, '/login.html'));
}

export const registerUserView = (req, res) => {
   return res.sendFile(path.join(ViewDir, '/register.html'));
}

export const homeView = (req, res) => {
   return res.sendFile(path.join(ViewDir, '/dashboard.html'));
}