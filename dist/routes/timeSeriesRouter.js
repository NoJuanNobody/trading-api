"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var axios_1 = __importDefault(require("axios"));
var router = express_1.default.Router();
var apiKey = process.env.APIKEY;
router.get('/', function (req, res) {
    var symbol = req.body.symbol;
    axios_1.default.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=5min&apikey=" + apiKey)
        .then(function (response) {
        res.send(response.data);
    })
        .catch(function (e) {
        res.status(500).send(e.message);
    });
});
exports.default = router;
