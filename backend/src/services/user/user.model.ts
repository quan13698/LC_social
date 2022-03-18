import * as mongoose from 'mongoose';
const UserModel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phone_number: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    user_name: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 15,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
    },
    
    createAt: {
        type: Date,
        default: Date.now,
    },
});
export default mongoose.model('user', UserModel, 'user');
