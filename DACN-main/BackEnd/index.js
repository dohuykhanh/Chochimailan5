const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const { connectToDb, db } = require('./db');



const GruopRouter = require("./Routers/GroupRouter");
const TaiKhoanRouter = require("./Routers/TaiKhoanRouter");
const TaskRouter = require("./Routers/TaskRouter");

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(express.json());


app.use("/Gruop", GruopRouter);
app.use("/TaiKhoan", TaiKhoanRouter);
app.use("/Task", TaskRouter);

app.get('/', (req, res) => {
    res.json('Hello world')
})


app.post('/Login', async(req, res) => {
    console.log(req.body)
    const respond = await db.User.findOne(req.body)
    res.status(200)
    res.json(respond)
})


const port = process.env['PORT'] || 5001
app.listen(port, () => {
    console.log('App is running on port 3000', port);
    connectToDb()
})