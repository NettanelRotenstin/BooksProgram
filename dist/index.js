"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./db/config");
const crdRouter_1 = __importDefault(require("./routes/crdRouter"));
const cors_1 = __importDefault(require("cors"));
//import exress
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
(0, config_1.connectDB)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', crdRouter_1.default);
app.listen(1214, () => {
    console.log(`server is running on port 1214`);
});
