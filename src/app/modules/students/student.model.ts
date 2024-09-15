import mongoose from 'mongoose'
import { TStudent } from './student.interface'
import StudentSchema from './student.schema'

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

const StudentModel = mongoose.model<TStudent>('Student', StudentSchema)

export default StudentModel
