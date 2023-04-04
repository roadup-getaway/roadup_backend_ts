import {Request} from "express";
import * as oracledb from 'oracledb'


const fs = require('fs');
oracledb.initOracleClient({libDir: "~/oracle2/instantclient_12_2"})

const modelGetRoads = () => {
    console.log("보자보자어디보자10")
    oracledb.getConnection({
        user: "system",
        password: "oracle",
        connectString: "43.201.164.113/XE"
    }, function (error, connection) {
        console.log("보자보자어디보자2")
        if (error) {
            console.log("접속 실패", error)
        }
        let conn = connection
        console.log(conn)
    })
    console.log("보자보자어디보자3")
    return fs.readFileSync('./model/roads.json');
}

const modelGetRoadId = (id: number) => {
    const file = fs.readFileSync('./model/roads.json')
    // console.log(file);
    for (const item of JSON.parse(file)) {
        console.log(item);
        if (item.id == id) {
            console.log(`coorect: ${item.name}`)
            return item
        }
    }
}

const modelPostRoad = (req: Request) => {
    const file = fs.readFileSync('./model/roads.json');
    const data = JSON.parse(file)
    const newRoad = {
        id : data[data.length - 1].id + 1,
        name : req.body.name,
        description : req.body.description,
        writer : req.body.writer
    }
    data.push(newRoad)
    const dataJson = JSON.stringify(data)
    fs.writeFileSync('./model/roads.json', dataJson)
    console.log(newRoad);
    return "1"
}

const modelDeleteRoad = (req: Request) => {
    console.log(`delete ${Number(req.query.id)}`)
    const file = fs.readFileSync('./model/roads.json');
    const data = JSON.parse(file)
    data.filter((e: { id: number; }) => {
        console.log(e.id)
        console.log(Number(req.query.id))
        e.id != Number(req.query.id)
    })
    console.log(data)
}


export {
    modelGetRoads,
    modelGetRoadId,
    modelPostRoad,
    modelDeleteRoad
}

