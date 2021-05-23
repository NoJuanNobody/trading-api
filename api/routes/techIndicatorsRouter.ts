import express from 'express';
import axios from 'axios';

const router = express.Router();

const apiKey = process.env.APIKEY

router.get('/ma', (req, res) => {
  const { symbol, func } = req.body;
  axios.get(`https://www.alphavantage.co/query?function=${func}&symbol=${symbol}&interval=weekly&time_period=10&series_type=open&apikey=${apiKey}`).then((response) => {
    res.send(response.data);
  }).catch((e) => {
   
    res.status(500).send(e.message);
  }
  );
});

export default router;
