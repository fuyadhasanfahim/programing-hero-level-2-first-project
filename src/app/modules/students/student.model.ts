import mongoose from 'mongoose'
import { IStudent } from './student.interface'
import StudentSchema from './student.schema'
import bcrypt from 'bcrypt'
import config from '../../config'

// ? Pre save middleware/hooks
StudentSchema.pre('save', async function (next) {
    // const user = this
    // Hashing password
    this.password = await bcrypt.hash(
        this.password,
        Number(config.bcrypt_salt_rounds),
    )
    next()
})

// ? Post save middleware/hooks
StudentSchema.post('save', function (doc, next) {
    doc.password = ''
    next()
})

StudentSchema.pre('find', async function (next) {
    this.where({ isDeleted: { $ne: true } })

    next()
})
StudentSchema.pre('aggregate', async function (next) {
    this.pipeline().unshift({
        $match: { isDeleted: { $ne: true } },
    })

    next()
})

const StudentModel = mongoose.model<IStudent>('Student', StudentSchema)

export default StudentModel
