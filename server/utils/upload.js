// to create middleware we make use of multer : npm i multer 
// we create middleware bz we want the frontend data to be printed

import multer from 'multer';

const upload = multer({ dest: 'uploads'}); // it is shown in terminal with all the other data

export default upload;