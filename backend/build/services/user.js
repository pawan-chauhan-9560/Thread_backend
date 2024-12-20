"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = require("node:crypto");
const db_1 = require("../lib/db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "typeScript_Practice";
class UserService {
    static generateHash(salt, password) {
        const hashPassword = (0, node_crypto_1.createHmac)("sha256", salt)
            .update(password)
            .digest("hex");
        return hashPassword;
    }
    static createUser(payload) {
        const { firstName, lastName, email, password } = payload;
        const salt = (0, node_crypto_1.randomBytes)(32).toString("hex");
        return db_1.prismaClient.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: UserService.generateHash(salt, password),
                salt: salt,
            },
        });
    }
    static async getUserByemail(email) {
        return db_1.prismaClient.user.findUnique({ where: { email } });
    }
    static async getUserToken(payload) {
        const { email, password } = payload;
        const user = await UserService.getUserByemail(email);
        if (!user)
            throw new Error("User not found");
        const userSalt = user.salt ?? "";
        const userHashPassword = UserService.generateHash(userSalt, password);
        if (password !== userHashPassword)
            throw new Error("Wrong Password");
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, JWT_SECRET);
        return token;
    }
}
exports.default = UserService;
