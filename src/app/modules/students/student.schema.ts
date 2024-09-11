import { Schema } from 'mongoose'

const UserNameSchema = new Schema({
    firstName: { type: String, required: [true, 'First name is required.'] },
    middleName: { type: String, required: false },
    lastName: { type: String, required: [true, 'Last name is required.'] },
})

const GuardianSchema = new Schema({
    fathersName: {
        type: String,
        required: [true, 'Fathers name is required.'],
    },
    fathersOccupation: {
        type: String,
        required: [true, 'Fathers occupation is required.'],
    },
    fathersContactNo: {
        type: String,
        required: [true, 'Fathers contact number is required.'],
    },
    mothersName: {
        type: String,
        required: [true, 'Mothers name is required.'],
    },
    mothersOccupation: {
        type: String,
        required: [true, 'Mothers occupation is required.'],
    },
    mothersContactNo: {
        type: String,
        required: [true, 'Mothers contact number is required.'],
    },
})

const LocalGuardianSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Local guardians name is required.'],
    },
    occupation: {
        type: String,
        required: [true, 'Local guardians occupation is required.'],
    },
    contactNo: {
        type: String,
        required: [true, 'Local guardians contact number is required.'],
    },
})

const StudentSchema = new Schema({
    id: { type: String, required: [true, 'ID is required.'], unique: true },
    name: { type: UserNameSchema, required: [true, 'Name is required.'] },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female', 'Other'],
            message: `{VALUE} is not a valid gender. Gender must be either Male, Female, or Other.`,
        },
        required: [true, 'Gender is required.'],
    },
    email: {
        type: String,
        required: [true, 'Email address is required.'],
        unique: true,
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Date of birth is required.'],
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required.'],
    },
    emergencyContactNo: {
        type: String,
        required: [true, 'Emergency contact number is required.'],
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
        required: false,
    },
    presentAddress: {
        type: String,
        required: [true, 'Present address is required.'],
    },
    permanentAddress: {
        type: String,
        required: [true, 'Permanent address is required.'],
    },
    guardian: {
        type: GuardianSchema,
        required: [true, 'Guardian is required.'],
    },
    localGuardian: {
        type: LocalGuardianSchema,
        required: [true, 'Local guardian is required.'],
    },
    profileImage: { type: String, required: false },
    isActive: {
        type: String,
        enum: ['active', 'inactive'],
        required: [true, 'isActive field is required.'],
        default: 'active',
    },
})

export default StudentSchema
