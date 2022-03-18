import * as mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    company: {
        type: String,
    },
    location: {
        type: String,
    },
    status: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
    },
    bio: {
        type: String,
    },
    experience: [
        {
            title: {
                type: String,
                required: true,
            },
            company: {
                type: String,
                required: true,
            },
            position: {
                type: String,
                required: true,
            },
            from: {
                type: Date,
                required: true,
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false,
            },
        },
    ],
    education: [
        {
            school: {
                type: String,
                required: true,
            },
            major: {
                type: String,
                required: true,
            },
            degree: {
                type: String,
                required: true,
            },
            from: {
                type: Date,
                required: true,
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false,
            },
        },
    ],
    social: {
        youtube: {
            type: String,
        },
        linkedIn: {
            type: String,
        },
        tiktok: {
            type: String,
        },
        github: {
            type: String,
        },
    },
    following: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
        },
    ],
    follower: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
        },
    ],
    friends: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
            },
            date: {
                type: Date,
                default: Date.now()
            }
        },
    ],
    friendRequest: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            date:{
                type: Date,
                default: Date.now()
            }
        }
    ]
});

export default mongoose.model('profile', profileSchema, 'profile');

