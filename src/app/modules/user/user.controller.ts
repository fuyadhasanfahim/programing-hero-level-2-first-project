/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserServices } from './user.service'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'

const createUser = catchAsync(async (req, res, next) => {
    const { password, student: studentData } = req.body

    const result = await UserServices.createUserIntoDB(password, studentData)

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Student is created successfully',
        data: result,
    })
})

export const UserControllers = {
    createUser,
}
