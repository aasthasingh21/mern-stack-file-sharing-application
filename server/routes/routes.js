import express from 'express';
import { uploadImage, downloadImgage } from '../controller/image-controller.js'; // .js is necessary in backend
import upload from '../utils/upload.js';


const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage); // this is to upload the image
// upload.single('file) = middleware, single(one file), with name = file (these all are shown in terminal(basically frontend data))

router.get('/file/:fileId', downloadImgage); 
// and this is to download the image, /file/fileId : path is localhost:8000/file/fileId

export default router;