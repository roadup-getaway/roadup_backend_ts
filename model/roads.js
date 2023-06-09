"use strict";
exports.__esModule = true;
exports.modelDeleteRoad = exports.modelPostRoad = exports.modelGetRoadId = exports.modelGetRoads = void 0;
var oracledb = require("oracledb");
var fs = require('fs');
var modelGetRoads = function () {
    console.log("보자보자어디보자10");
    oracledb.getConnection({
        user: "system",
        password: "oracle",
        connectString: "43.201.164.113/XE"
    }, function (error, connection) {
        console.log("보자보자어디보자2");
        if (error) {
            console.log("접속 실패", error);
        }
        var conn = connection;
        console.log(conn);
    });
    console.log("보자보자어디보자3");
    return fs.readFileSync('./model/roads.json');
};
exports.modelGetRoads = modelGetRoads;
var modelGetRoadId = function (id) {
    var file = fs.readFileSync('./model/roads.json');
    // console.log(file);
    for (var _i = 0, _a = JSON.parse(file); _i < _a.length; _i++) {
        var item = _a[_i];
        console.log(item);
        if (item.id == id) {
            console.log("coorect: ".concat(item.name));
            return item;
        }
    }
};
exports.modelGetRoadId = modelGetRoadId;
var modelPostRoad = function (req) {
    var file = fs.readFileSync('./model/roads.json');
    var data = JSON.parse(file);
    var newRoad = {
        id: data[data.length - 1].id + 1,
        name: req.body.name,
        description: req.body.description,
        writer: req.body.writer
    };
    data.push(newRoad);
    var dataJson = JSON.stringify(data);
    fs.writeFileSync('./model/roads.json', dataJson);
    console.log(newRoad);
    return "1";
};
exports.modelPostRoad = modelPostRoad;
var modelDeleteRoad = function (req) {
    console.log("delete ".concat(Number(req.query.id)));
    var file = fs.readFileSync('./model/roads.json');
    var data = JSON.parse(file);
    data.filter(function (e) {
        console.log(e.id);
        console.log(Number(req.query.id));
        e.id != Number(req.query.id);
    });
    console.log(data);
};
exports.modelDeleteRoad = modelDeleteRoad;
