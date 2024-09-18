import { Types } from 'mongoose'

export interface TUserName {
    firstName: string
    middleName?: string
    lastName: string
}

export interface TGuardian {
    fathersName: string
    fathersOccupation: string
    fathersContactNo: string
    mothersName: string
    mothersOccupation: string
    mothersContactNo: string
}

export interface TLocalGuardian {
    name: string
    occupation: string
    contactNo: string
}

export interface TStudent {
    id: string
    user: Types.ObjectId
    name: TUserName
    gender: 'Male' | 'Female' | 'Other'
    email: string
    dateOfBirth: string
    contactNo: string
    emergencyContactNo: string
    bloodGroup?: 'A+' | 'B+' | 'AB+' | 'O+' | 'A-' | 'B-' | 'AB-' | 'O-'
    presentAddress: string
    permanentAddress: string
    guardian: TGuardian
    localGuardian: TLocalGuardian
    profileImage?: string
    admissionSemester: Types.ObjectId
    isDeleted: boolean
}
