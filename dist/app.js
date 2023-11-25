"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./app/modules/users/user.route");
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application route
app.use("/api/v1/users", user_route_1.routerFromUserRoute);
const getAController = (req, res) => {
    const a = 5;
    res.send(String(a));
};
app.get("/", getAController);
exports.default = app;
