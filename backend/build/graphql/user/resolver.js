"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const queries = {};
const mutations = {
    createUser: async (_, {}, {}) => {
        return "random hai sab";
    }
};
exports.resolvers = { queries, mutations };
