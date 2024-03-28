export const errorHandler = (statusCode, message) => { // This is a fuction which creates manual errors using javascript error constructor.
    const error = new Error();
    const statusCode = error.statusCode;
    const message = error.message;
    return error;
}