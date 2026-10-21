import express from 'express'
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';
const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Server is Running on:${PORT}`);
})