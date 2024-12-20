"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const user_1 = __importDefault(require("../../services/user"));
const queries = {
    getUserToken: async (_, payload) => {
        const token = await user_1.default.getUserToken(payload);
        return token;
    }
};
const mutations = {
    createUser: async (_, payload) => {
        const res = await user_1.default.createUser(payload);
        return res.id;
    },
};
exports.resolvers = { queries, mutations };
