import { Utils } from "./utils";
import { Response } from "express";

interface StatusCode {
    [key: number]: string;
}

export class ResponseGenerator extends Utils {
    static codeResponse: StatusCode = {
        404: "Resource Not Found",
        400: "Bad Request",
        500: "Internal Server Error",
        200: "Success",
        201: "Created",
        401: "Authentication Error",
    };

    static ResponseGenerator: any;

    static sendError(res: Response, statusCode: number, message?: string) {
        const responseMessage = message ?? this.codeResponse[statusCode];
        return res.status(statusCode).send({
            statusCode,
            message: responseMessage,
        });
    }

    static sendSuccess(res: Response, statusCode: number, data: {}) {
        const cleanObj = this.removeNull(data);
        return res.status(statusCode).send({
            statusCode,
            message: this.codeResponse[statusCode],
            ...cleanObj,
        });
    }
}
