// libraries imports
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// file imports
import connect from "./database/mongoDb.js";

// router imports
import userRouter from "./routes/userRoutes.js";

// app
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", userRouter);

await connect();

app.listen(port, () => console.log(`server started on port ${port}`));
