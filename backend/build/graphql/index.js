"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const index_1 = require("./user/index");
async function createApolloGraphqlServer() {
    const gqlServer = new server_1.ApolloServer({
        typeDefs: `
            ${index_1.User.typeDefs}
            type Query {
               ${index_1.User.queries}
            }

            type Mutation {
               ${index_1.User.mutations}
            }
        `,
        resolvers: {
            Query: {
                ...index_1.User.resolvers.queries,
            },
            Mutation: {
                ...index_1.User.resolvers.mutations,
            },
        },
    });
    // Start the gql server
    await gqlServer.start();
    return gqlServer;
}
exports.default = createApolloGraphqlServer;
