import { RequestHandler } from "express";

const authValidate: RequestHandler = async (request, response, next) => {
    try {
        const { authorization } = request.headers;
        if(!authorization) {
            return response.status(401).json({
                error: true,
                message: 'Usuário sem autorização!!!!!!!!'
            })
        }
        next();
    } catch (err) {
        return response.status(401).json({
            error: true,
            message: 'Usuário sem autorização!!!!!!!!'
        })
    }
}

export default authValidate