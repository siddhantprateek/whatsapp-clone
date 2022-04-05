import mongoose from 'mongoose'
const { Schema } = mongoose;
const whatsappSchema = new Schema({
    message: String,
    name:  String,
    timestamp: String,
    received: Boolean
});

const Model = mongoose.model('messagecontents', whatsappSchema);
export default Model;