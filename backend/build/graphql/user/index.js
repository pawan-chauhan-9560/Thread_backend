"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeDef_1 = require("./typeDef");
const queries_1 = require("./queries");
const mutation_1 = require("./mutation");
const resolver_1 = require("./resolver");
exports.User = { typeDefs: typeDef_1.typeDefs, queries: queries_1.queries, mutations: mutation_1.mutations, resolvers: resolver_1.resolvers };
