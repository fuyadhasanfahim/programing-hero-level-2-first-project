import express from 'express'
import { UserControllers } from './user.controller'
import { studentValidations } from '../students/student.validation'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post(
    '/create-student',
    validateRequest(studentValidations.studentValidationSchema),
    UserControllers.createUser,
)

export const UserRoutes = router
