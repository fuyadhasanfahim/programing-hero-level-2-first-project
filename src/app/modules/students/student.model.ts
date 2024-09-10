import mongoose from 'mongoose'
import { IStudent } from './student.interface'
import StudentSchema from './student.schema'

const StudentModel = mongoose.model<IStudent>('Student', StudentSchema)

export default StudentModel
