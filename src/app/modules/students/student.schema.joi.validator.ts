import Joi from 'joi'

const joiUserNameSchema = Joi.object({
    firstName: Joi.string()
        .required()
        .min(2)
        .max(50)
        .trim()
        .regex(/^[A-Za-z]+$/),
    middleName: Joi.string()
        .optional()
        .min(2)
        .max(50)
        .trim()
        .regex(/^[A-Za-z]+$/),
    lastName: Joi.string()
        .required()
        .min(2)
        .max(50)
        .trim()
        .regex(/^[A-Za-z]+$/),
})

const joiGuardianSchema = Joi.object({
    fathersName: Joi.string()
        .required()
        .min(2)
        .max(50)
        .trim()
        .regex(/^[A-Za-z]+$/),
    fathersOccupation: Joi.string()
        .required()
        .min(2)
        .max(50)
        .trim()
        .regex(/^[A-Za-z]+$/),
    fathersContactNo: Joi.string()
        .required()
        .min(10)
        .max(15)
        .trim()
        .regex(/^[0-9]+$/),
    mothersName: Joi.string()
        .required()
        .min(2)
        .max(50)
        .trim()
        .regex(/^[A-Za-z]+$/),
    mothersOccupation: Joi.string()
        .required()
        .min(2)
        .max(50)
        .trim()
        .regex(/^[A-Za-z]+$/),
    mothersContactNo: Joi.string()
        .required()
        .min(10)
        .max(15)
        .trim()
        .regex(/^[0-9]+$/),
})

const joiLocalGuardianSchema = Joi.object({
    name: Joi.string()
        .required()
        .min(2)
        .max(50)
        .trim()
        .regex(/^[A-Za-z]+$/),
    occupation: Joi.string()
        .required()
        .min(2)
        .max(50)
        .trim()
        .regex(/^[A-Za-z]+$/),
    contactNo: Joi.string()
        .required()
        .min(10)
        .max(15)
        .trim()
        .regex(/^[0-9]+$/),
})

const joiValidationSchema = Joi.object({
    id: Joi.string().required().messages({
        'any.required': 'Student ID is required.',
        'string.empty': 'Student ID cannot be empty.',
    }),

    name: joiUserNameSchema.required().messages({
        'any.required': 'Name is required.',
        'string.empty': 'Name cannot be empty.',
    }),

    gender: Joi.string().valid('Male', 'Female', 'Other').required().messages({
        'any.only':
            '{#value} is not valid. Gender must be Male, Female, or Other.',
        'any.required': 'Gender is required.',
        'string.empty': 'Gender cannot be empty.',
    }),

    email: Joi.string().email().required().messages({
        'any.required': 'Email address is required.',
        'string.empty': 'Email address cannot be empty.',
        'string.email': 'Email address must be a valid email.',
    }),

    dateOfBirth: Joi.date().iso().required().messages({
        'any.required': 'Date of birth is required.',
        'date.base': 'Date of birth must be a valid date.',
        'string.empty': 'Date of birth cannot be empty.',
    }),

    contactNo: Joi.string().required().messages({
        'any.required': 'Contact number is required.',
        'string.empty': 'Contact number cannot be empty.',
    }),

    emergencyContactNo: Joi.string().required().messages({
        'any.required': 'Emergency contact number is required.',
        'string.empty': 'Emergency contact number cannot be empty.',
    }),

    bloodGroup: Joi.string()
        .valid('A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-')
        .optional(),

    presentAddress: Joi.string().required().messages({
        'any.required': 'Present address is required.',
        'string.empty': 'Present address cannot be empty.',
    }),

    permanentAddress: Joi.string().required().messages({
        'any.required': 'Permanent address is required.',
        'string.empty': 'Permanent address cannot be empty.',
    }),

    guardian: joiGuardianSchema.required().messages({
        'any.required': 'Guardian information is required.',
    }),

    localGuardian: joiLocalGuardianSchema.required().messages({
        'any.required': 'Local guardian information is required.',
    }),

    profileImage: Joi.string().optional(),

    isActive: Joi.string()
        .valid('active', 'inactive')
        .default('active')
        .required()
        .messages({
            'any.required': 'Student status (active/inactive) is required.',
            'any.only': 'Student status must be either active or inactive.',
        }),
})

export default joiValidationSchema
