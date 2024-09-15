import { z } from 'zod'

// Name schema
const zodUserNameSchema = z.object({
    firstName: z
        .string()
        .min(1, { message: 'First name is required.' })
        .max(50)
        .trim()
        .refine((value) => /^[A-Za-z]+$/.test(value), {
            message: 'First name should only contain alphabets.',
        })
        .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),
    middleName: z.string().trim().optional().default(''),
    lastName: z
        .string()
        .min(1, { message: 'Last name is required.' })
        .max(50)
        .trim()
        .refine((value) => /^[A-Za-z]+$/.test(value), {
            message: 'Last name should only contain alphabets.',
        }),
})

// Guardian schema
const zodGuardianSchema = z.object({
    fathersName: z.string().min(1, "Father's name is required."),
    fathersOccupation: z.string().min(1, "Father's occupation is required."),
    fathersContactNo: z
        .string()
        .min(10, "Father's contact number is required.")
        .max(15, "Father's contact number must be between 10 and 15 digits.")
        .regex(
            /^[0-9]+$/,
            "Father's contact number must contain only numbers.",
        ),
    mothersName: z.string().min(1, "Mother's name is required."),
    mothersOccupation: z.string().min(1, "Mother's occupation is required."),
    mothersContactNo: z
        .string()
        .min(10, "Mother's contact number is required.")
        .max(15, "Mother's contact number must be between 10 and 15 digits.")
        .regex(
            /^[0-9]+$/,
            "Mother's contact number must contain only numbers.",
        ),
})

// Local Guardian schema
const zodLocalGuardianSchema = z.object({
    name: z.string().min(1, "Local guardian's name is required."),
    occupation: z.string().min(1, "Local guardian's occupation is required."),
    contactNo: z
        .string()
        .min(10, "Local guardian's contact number is required.")
        .max(
            15,
            "Local guardian's contact number must be between 10 and 15 digits.",
        )
        .regex(
            /^[0-9]+$/,
            "Local guardian's contact number must contain only numbers.",
        ),
})

// Main Student schema
const zodStudentSchema = z.object({
    id: z.string().min(1, 'Student ID is required.'),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long.' })
        .max(30, { message: "Password can't be more than 30 characters long." })
        .nonempty({ message: 'Password is required.' }),
    name: zodUserNameSchema,
    gender: z.enum(['Male', 'Female', 'Other'], {
        invalid_type_error:
            '{VALUE} is not valid. Gender must be Male, Female, or Other.',
    }),
    email: z
        .string()
        .email('Email address must be valid.')
        .min(1, 'Email address is required.'),
    dateOfBirth: z.string().min(1, 'Date of birth is required.'),
    contactNo: z
        .string()
        .min(10, 'Contact number is required.')
        .max(15, 'Contact number must be between 10 and 15 digits.')
        .regex(/^[0-9]+$/, 'Contact number must contain only numbers.'),
    emergencyContactNo: z
        .string()
        .min(10, 'Emergency contact number is required.')
        .max(15, 'Emergency contact number must be between 10 and 15 digits.')
        .regex(
            /^[0-9]+$/,
            'Emergency contact number must contain only numbers.',
        ),
    bloodGroup: z
        .enum(['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'])
        .optional(),
    presentAddress: z.string().min(1, 'Present address is required.'),
    permanentAddress: z.string().min(1, 'Permanent address is required.'),
    guardian: zodGuardianSchema,
    localGuardian: zodLocalGuardianSchema,
    profileImage: z.string().optional(),
    isActive: z.enum(['active', 'inactive']).default('active'),
    isDeleted: z.boolean().default(false),
})

export default zodStudentSchema
