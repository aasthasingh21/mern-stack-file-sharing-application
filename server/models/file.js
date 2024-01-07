// to check if the data coming from the frontend is correct or no, we use this folder

import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadContent: { // how many times content is downloaded
        type: Number,
        required: true,
        default: 0 // as we are not passing this from frontend
    }

});

const File = mongoose.model('file', FileSchema); // name of the collection(file) = name of table in mysql

export default File;