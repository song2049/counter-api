const express = require("express");
const cors = require("cors");
const app = express();

//공통 미들웨어로 cors 사용하겠음, 내뱉는건 함수, 매개변수 객체넣어서 설정
app.use(cors({
    //리액트 로컬단, 프로세스, EC2 프로세스 허용
    origin: ["http://localhost:3000", "http://16.184.29.169"],
    methods: ["GET", "POST"],
    credentials: true

}))
//카운터 초기값
let count = 1;

app.get("/", (req,res) =>{
    res.json({count});
});

app.post("/increment", (req,res) =>{
    count ++;
    res.json({count});
});
app.post("/decrement", (req,res) =>{
    count --;
    res.json({count});
});

app.listen(3001, () => {
    console.log(`http:localhost:${3001} open`);
})