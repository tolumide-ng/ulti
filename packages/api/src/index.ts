import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import Routes from "./routes/v1";

dotenv.config();
const app = express();
app.use(express.json({}));
app.use(cors());

Routes(app);

app.use("*", (req, res) => {});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    process.stdout.write(`Listening on port ${PORT}`);
});

export default app;
