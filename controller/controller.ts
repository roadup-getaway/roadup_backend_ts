// const roadsModel = require('./../model/roads');
import { modelGetRoads, modelGetRoadId, modelPostRoad, modelDeleteRoad } from "./../model/roads";
import { Request, Response, } from "express";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { signJwt, verifyJwt } from './token';

const getRoads = (req: Request, res: Response) => {
    console.log("보자보자어디보자6")
    res.json(JSON.parse(modelGetRoads()))
}

const getRoadId = (req: any, res: Response) => {
    res.json(modelGetRoadId(Number(req.query.id)))
}

const postRoad =  (req: Request, res: Response) => {
    modelPostRoad(req)
}

const deleteRoad = (req: Request, res: Response) => {
    modelDeleteRoad(req)
}

const login = (req: Request, res: Response) => {
    console.log('login:');
    const payload = {
        id: "roadup",
    }
    console.log(signJwt(payload))
    res.json({
        message: '토큰 발급 완료',
        token: signJwt(payload)
    })
}


export {
    getRoads,
    getRoadId,
    postRoad,
    deleteRoad,
    login,

}