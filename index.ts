import express from "express";
import axios from "axios";
import dotenv from "dotenv";

import techIndicatorsRouter from './routes/techIndicatorsRouter';
import timeSeriesRouter from './routes/timeSeriesRouter';

dotenv.config();
const app=express();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

app.use('/technical-indicators', techIndicatorsRouter);
app.use('/time-series', timeSeriesRouter);

const port = process.env.PORT || 3000;
const key = process.env.APIKEY;



console.log(process.env.PORT, key);
app.listen(port, () => console.log(`app listening on Port ${port}`));
