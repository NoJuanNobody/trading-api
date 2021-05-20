import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const app=express();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

const port = process.env.PORT || 3000;
const key = process.env.APIKEY;

app.get('/moving-average', (req, res) => {
    const { symbol, func } = req.body;
    axios.get(`https://www.alphavantage.co/query?function=${func}&symbol=${symbol}&interval=5min&apikey=${key}`).then(val => {
        //select 'Time Series (60min)'
        const values = Object.values(val.data['Time Series (5min)']);
        const lows: number[] = [];
        const highs: number[] = [];
        values.map((v: any)=> {
            lows.push(eval(v["3. low"]));
            highs.push(eval(v["2. high"]));
            
        });
        const avglows = average(lows);
        const avghighs = average(highs)
        res.send({
            avglows,
            avghighs
        });
        
    });
    // todo: calculate moving average
});
const average: Function = (values: number[]) => {
    let sum: number = values.reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
    }, 0);
    return sum / values.length;
}

console.log(process.env.PORT, key);
app.listen(port, () => console.log(`app listening on Port ${port}`));
