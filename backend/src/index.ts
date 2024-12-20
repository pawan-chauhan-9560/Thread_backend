import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { createApolloGraphqlServer } from "./graphql/index";
import cors from "cors";

async function init() {
  const app = express();
  const port = 8000;
  app.use(cors());
  app.use(
    "/graphql",
    express.json(),
    expressMiddleware(await createApolloGraphqlServer()) as any
  );

  app.get("/", (req, res) => {
    res.send("A great job is waiting for you, Pawan! Take patience.");
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

init();
