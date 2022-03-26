// import mongoose from 'mongoose'
// import grid from 'gridfs-stream'


// const url = 'http://localhost:4000'


// const mongoconnection = mongoose.connection;

import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8000';


let gfs;
const conn = mongoose.connection;
conn.once('open', () => {
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});


export const uploadImage = (request, response) => {
    if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);    
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json('Failed to fetch image', error);
    }
}

// let gfs;

// mongoconnection.once('open' , () => {
//     gfs = gridfsStream(mongoconnection.db , mongoose.mongo)
//     gfs.collection('fs');
// })


// export const imageUpload = async (req , res) => {
//     try {
//         if(!req.file)
//         return res.status(404).json('file not found')
    
//         const imageURL = `${url}/file/${req.file.filename}`

//         res.status(200).json(imageURL)
//     } catch (error) {
//         res.status(500).json('error while uploading image from Controlller : ' , error)
//     }
// }

// export const getImage = async (req , res) => {
//     try {
//        const file = await gfs.files.findOne({filename : req.params.filename})
//        const readStream = gfs.createReadStream(file.filename)
//        readStream.pipe(res)
//     } catch (error) {
//        res.status(500).json('error while getting image from imageController' , error)
//     }
// }

