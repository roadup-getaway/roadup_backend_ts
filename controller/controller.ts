// const roadsModel = require('./../model/roads');
import { modelGetRoads, modelGetRoadId, modelPostRoad, modelDeleteRoad } from "./../model/roads";
import { Request, Response, } from "express";

const getRoads = (req: Request, res: Response) => {
    res.json(JSON.parse(modelGetRoads()))
}

const getRoadId = (req: Request, res: Response) => {
    console.log(req.query.id)
    // modelGetRoadId(Number(req.query.id));
    res.json(modelGetRoadId(Number(req.query.id)))
}

const postRoad =  (req: Request, res: Response) => {
    modelPostRoad(req)
}

const deleteRoad = (req: Request, res: Response) => {
    modelDeleteRoad(req)
}


export {
    getRoads,
    getRoadId,
    postRoad,
    deleteRoad,
}