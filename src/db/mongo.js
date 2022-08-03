import mongoose from "mongoose"
import dotenv from "dotenv"
import { log } from "utils"
dotenv.config()

export const connectDatabase=async()=>{
    try{
        let uri=`mongodb+srv://admin:khongco123@cluster0.lryrd7f.mongodb.net/?retryWrites=true&w=majority`
        let options={
            connectTimeoutMS:10000,
            useNewUrlParser:true,
        }
        await mongoose.connect(uri,options)
        log.info('Connect MongoDB successfully!')
    }
    catch(error){
        log.error(`Cannot connect MongoDB. Error ${error}`)
    }
}
connectDatabase()

export default mongoose;