// CORS = cross origin resource sharing : error by browser bz frontend (client = 3000 and react) and backend is 
// (server = 8000 and express), which is not allowed by browser

// cd server - npm i cors - 

import File from "../models/file.js";

export const uploadImage = async (req, res) => {
    // return res.status(200).json({msg : "hello"}) // as we dont  want this message but the actual data

    // console.log(req); // data from frontend // we want particular data/element so
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try { 
        const file = await File.create(fileObj); // it saves the file in the database
        // console.log(file);
        res.status(200).json({ path: `/file/${file._id}`}) // path = the address (you can see while downloading an image)
    } catch (error) { // bz its stored on the cloud so might give errror/ take time
        console.error(error);
        res.status(500).json({error: error})
    }

}

// when we see a path : after / is called params and after q = is called query

export const downloadImgage = async (req, res) => { // to download the uploaded image
    try {
        const file = await File.findById(req.params.fileId) // findbyid is a mongodb function
        file.downloadContent++; // bz by each download number of content will increase

        await file.save();

        res.download(file.path, file.name) // we have to download the image so they have a download function
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message})
    }
}