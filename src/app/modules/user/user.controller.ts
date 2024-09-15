import { NextFunction, Request, Response } from 'express'
import { UserServices } from './user.service'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body

        const result = await UserServices.createUserIntoDB(
            password,
            studentData,
        )

        sendResponse(res, {
            status: httpStatus.OK,
            success: true,
            message: 'Student is created successfully',
            data: result,
        })
    } catch (error) {
        next(error)
    }
}

export const UserControllers = {
    createUser,
}
