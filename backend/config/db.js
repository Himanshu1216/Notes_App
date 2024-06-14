//Connection file to mongo db
import mongoose from "mongoose";
// import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://himanshustudenteee21:XxZCwpbaSibjDgyY@cluster0.xowbhdg.mongodb.net/', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    //   useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

export default connectDB;