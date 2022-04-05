
// import multer from 'multer'
// import {GridFsStorage} from 'multer-gridfs-storage'

// const storage = new GridFsStorage({
//     url : 'mongodb+srv://janghani:JanGhani@janghan.v32kt.mongodb.net/janghani?retryWrites=true&w=majority',
//     options : {useNewUrlParser : true , useUnifiedTopology : true},
//     file : (req , file) => {
//         const match = ["image/jpg" , "image/png"]
//         if(match.indexOf(file.mimetype) === -1)
//             return `${Date.now()}-product-${file.originalname}`
//         return{
//             bucketName: "photos",
//             filenmae: `${Date.now()}-product-${file.originalname}`
//         }
//     }
// })

// export default multer({ storage })


// import multer from 'multer';
// import { GridFsStorage } from 'multer-gridfs-storage';

// const storage = new GridFsStorage({
//     url : 'mongodb+srv://janghani:JanGhani@janghan.v32kt.mongodb.net/janghani?retryWrites=true&w=majority',
//     // url: 'mongodb://localhost:27017/image-upload',
//     options: { useUnifiedTopology: true, useNewUrlParser: true },
//     file: (request, file) => {
//         const match = ["image/png", "image/jpg"];

//         if(match.indexOf(file.memeType) === -1) 
//             return`${Date.now()}-blog-${file.originalname}`;

//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-blog-${file.originalname}`
//         }
//     }
// });

// export default multer({storage}); 