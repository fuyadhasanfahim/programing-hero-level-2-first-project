import { TAcademicSemester } from '../academicSemester/academicSemester.interface'

export const generateStudentId = (payload: TAcademicSemester) => {
    const { year, code } = payload

    const currentId = (0).toString()
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0')
    incrementId = `${year}${code}${incrementId}`

    return incrementId
}
