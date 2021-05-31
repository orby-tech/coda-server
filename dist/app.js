"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const rest_api_1 = require("./rest_api");
const app = express_1.default();
const port = 4000;
app.use(cors_1.default());
rest_api_1.rest_api_fill(app);
/* @ts-ignore */
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map