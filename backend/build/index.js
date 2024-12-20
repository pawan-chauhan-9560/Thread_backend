"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const cors_1 = __importDefault(require("cors"));
async function init() {
    const app = (0, express_1.default)();
    const port = 8000;
    const gqlServer = new server_1.ApolloServer({
        typeDefs: `
      type Query {
        hello: String!
        say(name : String):String
      }
    `,
        resolvers: {
            Query: {
                hello: () => `You will get a job ASAP in a good company. Keep it up!`,
                say: (_, { name }) => ` hey, ${name} How are you`
            },
        },
    });
    await gqlServer.start();
    app.use((0, cors_1.default)());
    app.use("/graphql", express_1.default.json(), (0, express4_1.expressMiddleware)(gqlServer));
    app.get("/", (req, res) => {
        res.send("A great job is waiting for you, Pawan! Take patience.");
    });
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}
init();
