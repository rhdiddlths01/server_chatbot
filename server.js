const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRouter = require("./routes/api"); //routes폴더를 생성후 api.js를 생성해줍니다.
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.listen(PORT, function () {
console.log(`KAKAO CHATBOT SERVER IS RUNNING ON ${PORT}`);
});