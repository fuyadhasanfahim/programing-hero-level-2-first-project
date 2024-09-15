import { Request, Response, NextFunction } from 'express'

const globalErrorHandler = (
    error: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    next: NextFunction,
) => {
    const status = 500
    const message = error.message || 'Something went wrong!'

    return res.status(status).json({
        success: false,
        message,
        error,
    })
}

export default globalErrorHandler
