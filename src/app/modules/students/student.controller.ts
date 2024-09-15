import { NextFunction, Request, Response } from 'express'
import { StudentService } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

const getAllStudents = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const result = await StudentService.getAllStudentsFromDB()

        sendResponse(res, {
            status: httpStatus.OK,
            success: true,
            message: 'Students are retrieve successfully',
            data: result,
        })
    } catch (error) {
        next(error)
    }
}

const getSingleStudent = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { studentId } = req.params
        const result = await StudentService.getSingleStudentFromDB(studentId)

        sendResponse(res, {
            status: httpStatus.OK,
            success: true,
            message: 'Student is retrieve successfully',
            data: result,
        })
    } catch (error) {
        next(error)
    }
}

const deleteStudent = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { studentId } = req.params
        const result = await StudentService.deleteStudentFromDB(studentId)

        sendResponse(res, {
            status: httpStatus.OK,
            success: true,
            message: 'Student is deleted successfully',
            data: result,
        })
    } catch (error) {
        next(error)
    }
}

export const StudentController = {
    getAllStudents,
    getSingleStudent,
    deleteStudent,
}
