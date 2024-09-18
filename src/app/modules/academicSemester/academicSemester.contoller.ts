import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AcademicSemesterServices } from './academicSemester.services'

const createAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
        req.body,
    )

    sendResponse(res, {
        status: httpStatus.CREATED,
        success: true,
        message: 'Academic semester created successfully',
        data: result,
    })
})

const getAllAcademicSemesters = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB()

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Academic semester retrieved successfully',
        data: result,
    })
})

const getSingleAcademicSemesters = catchAsync(async (req, res) => {
    const result =
        await AcademicSemesterServices.getSingleAcademicSemesterFromDB(
            req.params.id,
        )

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Academic semester retrieved successfully',
        data: result,
    })
})

const updateAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.updateAcademicSemesterFromDB(
        req.params.id,
        req.body,
    )

    sendResponse(res, {
        status: httpStatus.OK,
        success: true,
        message: 'Academic semester updated successfully',
        data: result,
    })
})

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemesters,
    getSingleAcademicSemesters,
    updateAcademicSemester,
}
