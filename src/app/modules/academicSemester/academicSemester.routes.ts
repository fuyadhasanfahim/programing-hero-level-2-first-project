import { Router } from 'express'
import { AcademicSemesterControllers } from './academicSemester.contoller'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemester.validation'

const router = Router()

router.post(
    '/create-academic-semester',
    validateRequest(
        AcademicSemesterValidation.academicSemesterSchemaValidation,
    ),
    AcademicSemesterControllers.createAcademicSemester,
)

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters)

router.get('/:id', AcademicSemesterControllers.getSingleAcademicSemesters)

router.patch(
    '/:id',
    validateRequest(
        AcademicSemesterValidation.updateAcademicSemesterSchemaValidation,
    ),
    AcademicSemesterControllers.updateAcademicSemester,
)

export const AcademicSemesterRoutes = router
