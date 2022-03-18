import * as mongoose from "mongoose";

const postModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    content:{
        type: String,
        required: true
    }
})