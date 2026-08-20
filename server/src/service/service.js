import 'dotenv/config';
import Imagekit from 'imagekit';

let imagekit = new Imagekit({
    urlEndpoint  : process.env.urlEndpoint,
    publicKey    : process.env.publicKey,
    privateKey   : process.env.privateKey
  });

export const uploadImage = async (file , fileName )=>{
    const upload = await imagekit.upload({
        file: file, 
        fileName : fileName
    })
    return upload.url;
}  