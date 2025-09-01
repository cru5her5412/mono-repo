import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/", function (request, response) {
  response.json("hi");
});
app.listen(8080, function () {
  console.log("listening on port 8080");
});
