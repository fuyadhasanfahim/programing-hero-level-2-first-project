import { Schema } from 'mongoose'
import {
    academicSemesterCodes,
    academicSemesterMonths,
    academicSemesterNames,
} from './academicSemester.const'

const AcademicSemesterSchema = new Schema(
    {
        name: {
            type: String,
            enum: academicSemesterNames,
            required: true,
        },
        code: {
            type: String,
            enum: academicSemesterCodes,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        startMonth: {
            type: String,
            enum: academicSemesterMonths,
            required: true,
        },
        endMonth: {
            type: String,
            enum: academicSemesterMonths,
            required: true,
        },
    },
    {
        timestamps: true,
    },
)

export default AcademicSemesterSchema
