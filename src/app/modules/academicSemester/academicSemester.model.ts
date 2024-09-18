import { model } from 'mongoose'
import { TAcademicSemester } from './academicSemester.interface'
import AcademicSemesterSchema from './academicSemester.schema'

AcademicSemesterSchema.pre('save', async function (next) {
    const isSemesterExist = await AcademicSemesterModel.findOne({
        year: this.year,
        name: this.name,
    })

    if (isSemesterExist) {
        throw new Error('Semester already exists!')
    } else {
        next()
    }
})

const AcademicSemesterModel = model<TAcademicSemester>(
    'AcademicSemester',
    AcademicSemesterSchema,
)

export default AcademicSemesterModel
