import jwt, {VerifyErrors} from 'jsonwebtoken';
import dotenv from "dotenv";
import {Request, Response} from "express";
dotenv.config()

const signJwt = (payload: string | Buffer | object) => {
    const secret: any = process.env.JWT_SECRET
    const option = {
        expiresIn: '1h'
    }
    console.log(jwt.sign(payload, secret, option))
    return jwt.sign(payload, secret, option)
}

const verifyJwt = (req: any, res: any, next: any) => {
    // 토큰 없음
    if (!req.headers.authorization) {
        return res.status(401).json({
            name: "NoneToken",
            message: "토큰 없음"
        })
    }

    const secret: any = process.env.JWT_SECRET
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, secret, (error: any, decoded: any) => {
        if (error) {
            console.log(decoded)
            return res.status(401).json(error)
        }

        req.user = decoded

        next();
    })
}
export {
    signJwt,
    verifyJwt
}
