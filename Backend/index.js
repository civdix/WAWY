const { connectToMongo } = require("./db");
connectToMongo();
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api/auth/", require("./Routes/auth"));

app.get("/", (req, res) => {
  res.send("<h1>Your Connection is Succesfully Open and Ready to work</h1>");
});
app.listen(port, () => {
  console.log("App Listening at port ", port);
});
