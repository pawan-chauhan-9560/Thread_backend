import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";

async function init() {
  const app = express();
  const port = 8000;

  const gqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        hello: String!
        say(name : String):String
      }
    `,
    resolvers: {
      Query: {
        hello: () => `You will get a job ASAP in a good company. Keep it up!`,
        say:(_,{name}:{name:string})=>` hey, ${name} How are you`
      },
    },
  });

  await gqlServer.start();

  app.use(cors());
  app.use("/graphql", express.json(), expressMiddleware(gqlServer) as any);

  app.get("/", (req, res) => {
    res.send("A great job is waiting for you, Pawan! Take patience.");
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

init();
