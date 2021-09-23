/* imports */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Projects from "./model.js";

/* initialization */
const app = express();
const port = 9000;

/* middleware */
app.use(cors());
app.use(express.json());

/* initialize database */
const mongoUrl = "mongodb://127.0.0.1:27017/project_app";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () =>
  console.log("Database connected Sucessfully !")
);

/* routes */
app.get("/", (req, res) => {
  res.status(200).send("hi sithija");
});

app.get("/get/projects", (req, res) => {
  Projects.find((err, data) => {
    err ? res.status(500).send(err) : res.status(201).send(data);
  });
});

app.post("/new/project", (req, res) => {
  const projectData = req.body;

  Projects.create(projectData, (err, data) => {
    err ? res.status(500).send(err) : res.status(201).send(data);
  });
});

/* listen */
app.listen(port, () => console.log(`App Listening on port ${port}`));
