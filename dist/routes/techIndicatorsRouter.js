"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var axios_1 = __importDefault(require("axios"));
var router = express_1.default.Router();
var apiKey = process.env.APIKEY;
router.get('/sma', function (req, res) {
    var _a = req.body, symbol = _a.symbol, func = _a.func;
    axios_1.default.get("https://www.alphavantage.co/query?function=" + func + "&symbol=" + symbol + "&interval=weekly&time_period=10&series_type=open&apikey=" + apiKey).then(function (response) {
        res.send(response.data);
    }).catch(function (e) {
        res.status(500).send(e.message);
    });
});
exports.default = router;
