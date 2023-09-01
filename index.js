import express from "express";
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello from root! --siva",
  });
});

app.get("/path", (req, res) => {
  return res.status(200).json({
    message: "Hello from path! --path",
  });
});

app.listen(3000, () => {
  console.log('Running on 3000');
})
