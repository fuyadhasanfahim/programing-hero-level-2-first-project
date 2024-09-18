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

const updateAcademicSemesterSchemaValidation = z.object({
    body: z.object({
        name: z
            .enum([...academicSemesterNames] as [string, ...string[]])
            .optional(),
        code: z
            .enum([...academicSemesterCodes] as [string, ...string[]])
            .optional(),
        year: z.string().optional(),
        startMonth: z
            .enum([...academicSemesterMonths] as [string, ...string[]])
            .optional(),
        endMonth: z
            .enum([...academicSemesterMonths] as [string, ...string[]])
            .optional(),
    }),
})

export const AcademicSemesterValidation = {
    academicSemesterSchemaValidation,
    updateAcademicSemesterSchemaValidation,
}
