import express from 'express';
import axios from 'axios';

const router = express.Router();

const apiKey = process.env.APIKEY;

router.get('/', (req, res) => {
    const { symbol } = req.body;
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`)
    .then((response) => {
        res.send(response.data);
    })
    .catch((e) => {
        res.status(500).send(e.message);
    });
});

export default router;