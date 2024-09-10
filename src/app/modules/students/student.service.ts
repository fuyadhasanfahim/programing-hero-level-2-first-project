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

const getSingleStudentFromDB = async (id: string) => {
    const result = await StudentModel.findOne({ id })
    return result
}

export const StudentService = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB,
}
