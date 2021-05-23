"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var techIndicatorsRouter_1 = __importDefault(require("./routes/techIndicatorsRouter"));
var timeSeriesRouter_1 = __importDefault(require("./routes/timeSeriesRouter"));
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json());
app.use('/technical-indicators', techIndicatorsRouter_1.default);
app.use('/time-series', timeSeriesRouter_1.default);
var port = process.env.PORT || 3000;
var key = process.env.APIKEY;
console.log(process.env.PORT, key);
app.listen(port, function () { return console.log("app listening on Port " + port); });
