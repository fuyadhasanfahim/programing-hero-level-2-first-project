export type TAcademicSemesterMonths =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December'

export type TAcademicSemesterNames = 'Autumn' | 'Summer' | 'Fall'

export type TAcademicSemesterCodes = '01' | '02' | '03'

export interface TAcademicSemester {
    name: TAcademicSemesterNames
    code: TAcademicSemesterCodes
    year: string
    startMonth: TAcademicSemesterMonths
    endMonth: TAcademicSemesterMonths
}

export interface TAcademicSemesterNameCodeMapping {
    [key: string]: string
}
