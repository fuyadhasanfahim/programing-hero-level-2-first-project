import config from '../../config'
import { TStudent } from '../students/student.interface'
import StudentModel from '../students/student.model'
import { TUser } from './user.interface'
import UserModel from './user.model'

const createUserIntoDB = async (password: string, studentData: TStudent) => {
    const userData: Partial<TUser> = {}

    userData.password = password || (config.default_password as string)
    userData.role = 'student'
    userData.id = '2030100001'

    const newUser = await UserModel.create(userData)
    if (newUser) {
        studentData.id = newUser.id
        studentData.user = newUser._id

        const newStudent = await StudentModel.create(studentData)

        return newStudent
    }

    return newUser
}

export const UserServices = {
    createUserIntoDB,
}
