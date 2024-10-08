import { academicSemesterNameCodeMapping } from './academicSemester.const'
import { TAcademicSemester } from './academicSemester.interface'
import AcademicSemesterModel from './academicSemester.model'

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    if (academicSemesterNameCodeMapping[payload.name] !== payload.code) {
        throw new Error('Invalid academic semester name and code combination!')
    }

    const result = await AcademicSemesterModel.create(payload)

    return result
}

const getAllAcademicSemesterFromDB = async () => {
    const result = await AcademicSemesterModel.find()

    return result
}

const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await AcademicSemesterModel.findById(id)

    return result
}

const updateAcademicSemesterFromDB = async (
    id: string,
    payload: Partial<TAcademicSemester>,
) => {
    if (
        payload.name &&
        payload.code &&
        academicSemesterNameCodeMapping[payload.name] !== payload.code
    ) {
        throw new Error('Invalid semester code')
    }

    const result = await AcademicSemesterModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    })

    return result
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemesterFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterFromDB,
}
