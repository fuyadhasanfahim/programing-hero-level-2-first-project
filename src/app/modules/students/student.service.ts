import { IStudent } from './student.interface'
import StudentModel from './student.model'

const createStudentIntoDB = async (student: IStudent) => {
    const result = await StudentModel.create(student)
    return result
}

const getAllStudentsFromDB = async () => {
    const result = await StudentModel.find()
    return result
}

// const getSingleStudentFromDB = async () => {
//     const result = await StudentModel.findOne()
//     return result
// }

const getSingleStudentFromDB = async (id: string) => {
    const result = await StudentModel.aggregate([{ $match: { id: id } }])
    return result
}

const deleteStudentFromDB = async (id: string) => {
    const result = await StudentModel.updateOne({ id }, { isDeleted: true })
    return result
}

export const StudentService = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB,
}
