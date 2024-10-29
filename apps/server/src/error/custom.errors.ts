class CustomAPIError extends Error {
    message: string
    errorCode: ErrorCode
    statusCode: number
    error: any
    constructor(message: string, errorCode: ErrorCode, statusCode: number, error: any) {
        super(message);
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.error = error
    }
}

export enum ErrorCode {
    COURSE_NOT_FOUND = 1001,
    STUDENT_NOT_FOUND = 1002


}
export default CustomAPIError;
