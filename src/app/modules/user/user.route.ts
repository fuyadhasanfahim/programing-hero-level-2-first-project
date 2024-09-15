import express from 'express'
import { UserControllers } from './user.controller'

const router = express.Router()

router.post('/create-student', UserControllers.createUser)

export const UserRoutes = router
