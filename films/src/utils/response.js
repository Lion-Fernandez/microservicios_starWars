module.exports= (res, statusCode = 200, data) => {
    res.status(statusCode).json({
        error: false,
        data,
    });
};