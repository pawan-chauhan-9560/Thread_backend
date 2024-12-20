"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express4_1 = require("@apollo/server/express4");
const index_1 = __importDefault(require("./graphql/index"));
const cors_1 = __importDefault(require("cors"));
async function init() {
    const app = (0, express_1.default)();
    const port = 8000;
    app.use((0, cors_1.default)());
    app.use("/graphql", express_1.default.json(), (0, express4_1.expressMiddleware)(await (0, index_1.default)()));
    app.get("/", (req, res) => {
        res.send("A great job is waiting for you, Pawan! Take patience.");
    });
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}
init();
