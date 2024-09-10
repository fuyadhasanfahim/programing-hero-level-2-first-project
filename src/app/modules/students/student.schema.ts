import { Schema } from 'mongoose'

const UserNameSchema = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
})

const GuardianSchema = new Schema({
    fathersName: { type: String, required: true },
    fathersOccupation: { type: String, required: true },
    fathersContactNo: { type: String, required: true },
    mothersName: { type: String, required: true },
    mothersOccupation: { type: String, required: true },
    mothersContactNo: { type: String, required: true },
})

const LocalGuardianSchema = new Schema({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
})

const StudentSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: UserNameSchema, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
        required: false,
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: GuardianSchema, required: true },
    localGuardian: { type: LocalGuardianSchema, required: true },
    profileImage: { type: String, required: false },
    isActive: { type: String, enum: ['active', 'inactive'], required: true },
})

export default StudentSchema
