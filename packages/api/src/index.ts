import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import Routes from "./routes/v1";
import { ResponseGenerator } from "./helpers/responseGenerator";

dotenv.config();
const app = express();
app.use(express.json({}));
app.use(cors());

Routes(app);

app.use("*", (req, res) => {
    ResponseGenerator.sendError(res, 404);
});

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
    process.stdout.write(`Listening on port ${PORT}`);
});

export default app;
