import config from '../../config'
import AcademicSemesterModel from '../academicSemester/academicSemester.model'
import { TStudent } from '../students/student.interface'
import StudentModel from '../students/student.model'
import { TUser } from './user.interface'
import UserModel from './user.model'
import { generateStudentId } from './user.utils'

const createUserIntoDB = async (password: string, payload: TStudent) => {
    const userData: Partial<TUser> = {}

    userData.password = password || (config.default_password as string)
    userData.role = 'student'

    const admissionSemester = await AcademicSemesterModel.findById(
        payload.admissionSemester,
    )

    if (!admissionSemester) {
        throw new Error('Admission semester not found!')
    }

    userData.id = generateStudentId(admissionSemester)

    const newUser = await UserModel.create(userData)
    if (newUser) {
        payload.id = newUser.id
        payload.user = newUser._id

        const newStudent = await StudentModel.create(payload)

        return newStudent
    }

    return newUser
}

export const UserServices = {
    createUserIntoDB,
}
