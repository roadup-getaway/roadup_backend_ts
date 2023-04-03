import express, {Request, Response, NextFunction, request, response} from "express";
import * as controller from "./../controller/controller";

const router = require('express').Router();
import {verifyJwt} from './../controller/token';

router.post("/login", controller.login)

router.get("/roads", controller.getRoads)

router.get("/road", verifyJwt, controller.getRoadId)

router.post("/road", verifyJwt, controller.postRoad)

router.delete("/road", verifyJwt, controller.deleteRoad)



module.exports = router;
