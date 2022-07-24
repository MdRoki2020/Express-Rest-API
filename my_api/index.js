const app=require('./app');
const dotenv=require("dotenv");

dotenv.config({path: './config.env'})

app.listen(process.env.RUNNING_PORT,()=>{
    console.log('Our Port Is Successfully Running At '+process.env.RUNNING_PORT);
});