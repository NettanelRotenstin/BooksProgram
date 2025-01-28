"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crdRouter_1 = __importDefault(require("./routes/crdRouter"));
//import exress
const express = require("express");
const app = express();
app.use(express.json());
app.use('/', crdRouter_1.default);
app.listen(1212, () => {
    console.log(`server is running on port 1212`);
});
