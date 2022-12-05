import mongoose from "mongoose";
// import * as dotenv from 'dotenv';
// dotenv.config()


const MONGO_DB_HOST = "mongodb+srv://ChristinSchade:admin1234@cluster0.urdpr9b.mongodb.net/?retryWrites=true&w=majority"

try{
  const mongoDB = MONGO_DB_HOST
  const client = await mongoose.connect(mongoDB);
  console.log("client " , client)



  console.log(`Database connected with host ${client.connections.host}`)

} catch(err) {
  console.log(err)
}
const db = mongoose.connection;

export default db