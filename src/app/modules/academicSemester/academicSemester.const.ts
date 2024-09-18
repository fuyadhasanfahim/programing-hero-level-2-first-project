import {
    TAcademicSemesterCodes,
    TAcademicSemesterMonths,
    TAcademicSemesterNameCodeMapping,
    TAcademicSemesterNames,
} from './academicSemester.interface'

export const academicSemesterMonths: TAcademicSemesterMonths[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export const academicSemesterNames: TAcademicSemesterNames[] = [
    'Autumn',
    'Summer',
    'Fall',
]

export const academicSemesterCodes: TAcademicSemesterCodes[] = [
    '01',
    '02',
    '03',
]

export const academicSemesterNameCodeMapping: TAcademicSemesterNameCodeMapping =
    {
        Autumn: '01',
        Summer: '02',
        Fall: '03',
    }
