import express, { json, urlencoded } from "express";
import { config } from "dotenv";
import { log } from "utils";
import router from "routes";
import requestLogger from "middleware/requestLogger";
import cors from "cors";
config();

const PORT = process.env.PORT;
const app = express();
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(requestLogger);
app.listen(PORT, () => {
  log.info("Server is starting on port " + PORT);
});
app.use("/api", router);
