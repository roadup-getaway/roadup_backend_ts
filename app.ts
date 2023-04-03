// let age: number;
// age = 30;
// console.log(age);


import express, { Request, Response } from "express";
import jwt from 'jsonwebtoken';
const bodyParser = require('body-parser')

const app = express();
const router = require('./routes/index.ts');
const controller = require('./controller/controller')



// type Data = {
//     name: string;
//     age: number;
//     url: string;
// };
//
// const sendData: Data = {
//     name: "name",
//     age: 3,
//     url: "tistory.com",
// };

// app.get("/getts", (req: Request, res: Response) => {
//     res.send(sendData);
// });

// app.get("/road", (req: Request, res: Response) => {
//     res.send("get roads");
// });



// console.log("asdf");
// router.get("/roads", controller.getRoads);
//

//
// app.use("/admin", router)
// app.get('/roads', (req, res) => {
//     res.json("asf")
// })

// roadsModel.testett()
// console.log(roadsModel.pi_)
// app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use('/', router);



app.listen(3000, () => {
    console.log("**----------------------------------**");
    console.log("====      Server is On1...!!!      ====");
    console.log("**----------------------------------**");
})