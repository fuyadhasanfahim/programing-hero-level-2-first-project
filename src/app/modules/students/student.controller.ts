/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StudentService } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'

const getAllStudents = catchAsync(async (req, res, next) => {
    const result = await StudentService.getAllStudentsFromDB()

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Students are retrieve successfully',
        data: result,
    })
})

const getSingleStudent = catchAsync(async (req, res, next) => {
    const { studentId } = req.params
    const result = await StudentService.getSingleStudentFromDB(studentId)

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Student is retrieve successfully',
        data: result,
    })
})

const deleteStudent = catchAsync(async (req, res, next) => {
    const { studentId } = req.params
    const result = await StudentService.deleteStudentFromDB(studentId)

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Student is deleted successfully',
        data: result,
    })
})

export const StudentController = {
    getAllStudents,
    getSingleStudent,
    deleteStudent,
}
