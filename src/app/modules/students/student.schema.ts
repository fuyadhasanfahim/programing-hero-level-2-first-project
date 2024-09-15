import mongoose, { Schema } from 'mongoose'
import validator from 'validator'

const UserNameSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.'],
        trim: true,
        validate: function (value: string) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
    },
    middleName: { type: String, required: false, trim: true },
    lastName: {
        type: String,
        required: [true, 'Last name is required.'],
        trim: true,
        validate: {
            validator: (value: string) => {
                return validator.isAlpha(value)
            },
            message: '{VALUE} is not valid!',
        },
    },
})

const GuardianSchema = new Schema({
    fathersName: {
        type: String,
        required: [true, "Father's name is required."],
    },
    fathersOccupation: {
        type: String,
        required: [true, "Father's occupation is required."],
    },
    fathersContactNo: {
        type: String,
        required: [true, "Father's contact number is required."],
    },
    mothersName: {
        type: String,
        required: [true, "Mother's name is required."],
    },
    mothersOccupation: {
        type: String,
        required: [true, "Mother's occupation is required."],
    },
    mothersContactNo: {
        type: String,
        required: [true, "Mother's contact number is required."],
    },
})

const LocalGuardianSchema = new Schema({
    name: {
        type: String,
        required: [true, "Local guardian's name is required."],
    },
    occupation: {
        type: String,
        required: [true, "Local guardian's occupation is required."],
    },
    contactNo: {
        type: String,
        required: [true, "Local guardian's contact number is required."],
    },
})

const StudentSchema = new Schema({
    id: {
        type: String,
        required: [true, 'Student ID is required.'],
        unique: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'Student ID is required.'],
        unique: true,
        ref: 'User',
    },
    name: { type: UserNameSchema, required: [true, 'Full name is required.'] },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female', 'Other'],
            message:
                '{VALUE} is not valid. Gender must be Male, Female, or Other.',
        },
        required: [true, 'Gender is required.'],
    },
    email: {
        type: String,
        required: [true, 'Email address is required.'],
        unique: true,
        validate: {
            validator: (value: string) => {
                return validator.isEmail(value)
            },
            message: '{VALUE} is not a valid email address.',
        },
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
        required: [true, 'Guardian information is required.'],
    },
    localGuardian: {
        type: LocalGuardianSchema,
        required: [true, 'Local guardian information is required.'],
    },
    profileImage: { type: String, required: false },
    isDeleted: {
        type: Boolean,
        default: false,
    },
})

StudentSchema.methods.isUserExist = async function (): Promise<boolean> {
    const existingStudent = await mongoose
        .model('Student')
        .findOne({ id: this.id })

    return !!existingStudent
}

export default StudentSchema
