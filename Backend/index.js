const { connectToMongo } = require("./db");
connectToMongo();
require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const mailjet = require("node-mailjet").apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/api/auth/", require("./Routes/auth"));

app.get("/", (req, res) => {
  res.send("<h1>Your Connection is Succesfully Open and Ready to work</h1>");
});
// a3e009d86560c6181c4bf8b63c7c26ac - api key
// 8ffcd57b1ad3194f2866185748182c99 - secret key

app.post("/send-email", (req, res) => {
  const { senderEmail, email, message, phone, name } = req.body;

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "shivamdix@icloud.com",
          Name: "Contact Us WAWY",
        },
        To: [
          {
            Email: email,
            Name: name,
          },
        ],
        Subject: "Customer ContactUs Message",
        TextPart: "WAWY Customer Support",
        HTMLPart: `<h3>Name: ${name}</h3><br />Sender Email: ${email},Sender Phone: ${phone} <br/>Message: ${message}`,
      },
    ],
  });

  request
    .then((result) => {
      res.status(200).json(result.body);
    })
    .catch((err) => {
      res.status(err.statusCode).json({ error: err.message });
    });
});

app.listen(port, () => {
  console.log("App Listening at port ", port);
});
