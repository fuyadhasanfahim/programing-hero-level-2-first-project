import { Schema } from 'mongoose'
import { TUser } from './user.interface'

const UserSchema = new Schema<TUser>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        needsPasswordChange: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            enum: ['admin', 'student', 'faculty'],
            required: true,
        },
        status: {
            type: String,
            enum: ['in-progress', 'blocked'],
            default: 'in-progress',
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
)

export default UserSchema
