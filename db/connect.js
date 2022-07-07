import mongoose from 'mongoose'

const connectDB = (url) => {
  return mongoose.connect(url)
}
export default connectDB

// const connectionString = 
// 'mongodb+srv://mariammiz:<password>@cluster0.op1vs3m.mongodb.net/?retryWrites=true&w=majority'
