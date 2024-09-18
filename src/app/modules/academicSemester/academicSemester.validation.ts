import { z } from 'zod'
import {
    academicSemesterCodes,
    academicSemesterMonths,
    academicSemesterNames,
} from './academicSemester.const'

const academicSemesterSchemaValidation = z.object({
    body: z.object({
        name: z.enum([...academicSemesterNames] as [string, ...string[]]),
        code: z.enum([...academicSemesterCodes] as [string, ...string[]]),
        year: z.string(),
        startMonth: z.enum([...academicSemesterMonths] as [
            string,
            ...string[],
        ]),
        endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]),
    }),
})

export const AcademicSemesterValidation = {
    academicSemesterSchemaValidation,
}
