import { model } from 'mongoose'
import { TUser } from './user.interface'
import UserSchema from './user.schema'
import bcrypt from 'bcrypt'
import config from '../../config'

UserSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(
        this.password,
        Number(config.bcrypt_salt_rounds),
    )
    next()
})

UserSchema.post('save', function (doc, next) {
    doc.password = ''
    next()
})

const UserModel = model<TUser>('users', UserSchema)

export default UserModel
