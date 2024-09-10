import { StudentController } from './student.controller'
import express from 'express'

const router = express.Router()

// ? This will create students
router.post('/create-student', StudentController.createStudent)

// ? This will retrieve students data
router.get('/', StudentController.getAllStudents)

// ? This will retrieve student data
router.get('/:studentId', StudentController.getSingleStudent)

export const StudentRoutes = router
