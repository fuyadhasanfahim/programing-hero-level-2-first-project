import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { StudentRoutes } from '../modules/students/student.route'

const router = Router()

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/students',
        route: StudentRoutes,
    },
]

moduleRoutes.forEach((moduleRoute) => {
    const { path, route } = moduleRoute

    return router.use(path, route)
})

export default router
