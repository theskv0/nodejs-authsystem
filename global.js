import path from 'path';

global.RootDir = path.resolve(__dirname);
global.ViewDir = path.join(__dirname, '/views');
global.PublicDir = path.join(__dirname, '/public');
global.UploadDir = path.join(__dirname, '/uploads');
global.ControllerDir = path.join(__dirname, '/controllers');