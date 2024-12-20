"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const user_1 = require("./user");
async function createApolloGraphqlServer() {
    const gqlServer = new server_1.ApolloServer({
        typeDefs: `
            ${user_1.User.typeDefs}
            type Query {
               ${user_1.User.queries}
            }

            type Mutation {
               ${user_1.User.mutations}
            }
        `,
        resolvers: {
            Query: {
                ...user_1.User.resolvers.queries,
            },
            Mutation: {
                ...user_1.User.resolvers.mutations,
            },
        },
    });
    // Start the gql server
    await gqlServer.start();
    return gqlServer;
}
exports.default = createApolloGraphqlServer;
