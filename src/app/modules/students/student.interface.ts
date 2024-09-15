// * Create interface for student data

export interface IUserName {
    firstName: string
    middleName?: string
    lastName: string
}

export interface IGuardian {
    fathersName: string
    fathersOccupation: string
    fathersContactNo: string
    mothersName: string
    mothersOccupation: string
    mothersContactNo: string
}

export interface ILocalGuardian {
    name: string
    occupation: string
    contactNo: string
}

export interface IStudent {
    id: string
    password: string
    name: IUserName
    gender: 'Male' | 'Female' | 'Other'
    email: string
    dateOfBirth: string
    contactNo: string
    emergencyContactNo: string
    bloodGroup?: 'A+' | 'B+' | 'AB+' | 'O+' | 'A-' | 'B-' | 'AB-' | 'O-'
    presentAddress: string
    permanentAddress: string
    guardian: IGuardian
    localGuardian: ILocalGuardian
    profileImage?: string
    isActive: 'active' | 'inactive'
}
