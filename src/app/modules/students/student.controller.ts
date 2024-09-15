import { Request, Response } from 'express'
import { StudentService } from './student.service'
import zodStudentSchema from './student.schema.zod.validator'
// import joiValidationSchema from './student.schema.joi.validator'

const createStudent = async (req: Request, res: Response) => {
    try {
        // ? We will get the data from the client
        const { student: data } = req.body

        const zodParsedData = zodStudentSchema.parse(data)
        // const { error, value } = joiValidationSchema.validate(data) // joi validation

        // ? Here we will call the service and save the data
        // const result = await StudentService.createStudentIntoDB(data) // This is using the normal way of validation
        // const result = await StudentService.createStudentIntoDB(value) // Thi is using joi validation
        const result = await StudentService.createStudentIntoDB(zodParsedData) // Thi is using zod validation

        // ? If the save was successful, we will return a success response
        res.status(201).json({
            success: true,
            message: 'Student created successfully',
            data: result,
        })
    } catch (error: unknown) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong while creating the student!',
            error: (error as Error).message,
        })
    }
}

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.getAllStudentsFromDB()

        res.status(200).json({
            success: true,
            message: 'Student are retrieve successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong while retrieving students data!',
            error: (error as Error).message,
        })
    }
}

const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params
        const result = await StudentService.getSingleStudentFromDB(studentId)

        res.status(200).json({
            success: true,
            message: 'Student is retrieve successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong while retrieving student data!',
            error: (error as Error).message,
        })
    }
}

const deleteStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params
        const result = await StudentService.deleteStudentFromDB(studentId)

        res.status(200).json({
            success: true,
            message: 'Student is deleted successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong while retrieving student data!',
            error: (error as Error).message,
        })
    }
}

export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    deleteStudent,
}
