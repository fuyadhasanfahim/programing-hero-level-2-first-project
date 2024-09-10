import { Request, Response } from 'express'
import { StudentService } from './student.service'

const createStudent = async (req: Request, res: Response) => {
    try {
        // ? We will get the data from the client
        const { student: data } = req.body

        // ? Here we will call the service and save the data
        const result = await StudentService.createStudentIntoDB(data)

        // ? If the save was successful, we will return a success response
        res.status(201).json({
            success: true,
            message: 'Student created successfully',
            data: result,
        })
    } catch (error) {
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

export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent,
}
