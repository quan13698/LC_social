import * as mongoose from 'mongoose'
const UserModel = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    user_name: {
        type: String,
        required: true,
        minlength: 6,
        unique: true,
        trim:true
    },
    password: {
        type:String,
        required: true,
        minlength: 8,
        trim:true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model('user',UserModel,'user');