import app from './app.js';
import { mongoDBConnect } from './dataBase/dbConnectivity.js';

mongoDBConnect();
app.listen(process.env.PORT , ()=>{
    console.log('server is running');
});
