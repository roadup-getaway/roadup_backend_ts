import express, { Request, Response, NextFunction } from "express";
import * as controller from "./../controller/controller";
const router = require('express').Router();

// router.get("/", controller.index)

router.get("/roads", controller.getRoads)

router.get("/road", controller.getRoadId)

router.post("/road", controller.postRoad)

router.delete("/road", controller.deleteRoad)

module.exports = router;
