import path from "path";

export const homeView = (req, res) => {
   return res.sendFile(path.join(ViewDir, '/dashboard.html'));
}