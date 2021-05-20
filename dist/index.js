"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var axios_1 = __importDefault(require("axios"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json());
var port = process.env.PORT || 3000;
var key = process.env.APIKEY;
app.get('/moving-average', function (req, res) {
    var _a = req.body, symbol = _a.symbol, func = _a.func;
    axios_1.default.get("https://www.alphavantage.co/query?function=" + func + "&symbol=" + symbol + "&interval=5min&apikey=" + key).then(function (val) {
        //select 'Time Series (60min)'
        var values = Object.values(val.data['Time Series (5min)']);
        var lows = [];
        var highs = [];
        values.map(function (v) {
            lows.push(eval(v["3. low"]));
            highs.push(eval(v["2. high"]));
        });
        var avglows = average(lows);
        var avghighs = average(highs);
        res.send({
            avglows: avglows,
            avghighs: avghighs
        });
    });
    // todo: calculate moving average
});
var average = function (values) {
    var sum = values.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    return sum / values.length;
};
console.log(process.env.PORT, key);
app.listen(port, function () { return console.log("app listening on Port " + port); });
