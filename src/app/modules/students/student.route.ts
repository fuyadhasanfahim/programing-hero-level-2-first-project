import { StudentController } from './student.controller'
import express from 'express'

const router = express.Router()

router.get('/', StudentController.getAllStudents)
router.get('/:studentId', StudentController.getSingleStudent)
router.delete('/:studentId', StudentController.deleteStudent)

export const StudentRoutes = router
