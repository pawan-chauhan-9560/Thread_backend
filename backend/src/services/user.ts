import { createHmac, randomBytes } from "node:crypto";
import { prismaClient } from "../lib/db";
import JWT from "jsonwebtoken";

const JWT_SECRET = "typeScript_Practice";

export interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface GetUserTokenPayload {
  email: string;
  password: string;
}
class UserService {
  private static generateHash(salt: string, password: string) {
    const hashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    return hashPassword;
  }

  public static createUser(payload: CreateUserPayload) {
    const { firstName, lastName, email, password } = payload;
    const salt = randomBytes(32).toString("hex");
    return prismaClient.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: UserService.generateHash(salt, password),
        salt: salt,
      },
    });
  }
  private static async getUserByemail(email: string) {
    return prismaClient.user.findUnique({ where: { email } });
  }
  public static async getUserToken(payload: GetUserTokenPayload) {
    const { email, password } = payload;
    const user = await UserService.getUserByemail(email);
    if (!user) throw new Error("User not found");
    const userSalt = user.salt ?? "";
    const userHashPassword = UserService.generateHash(userSalt, password);

    if (password !== userHashPassword) throw new Error("Wrong Password");

    const token = JWT.sign({ id: user.id, email: user.email }, JWT_SECRET);
    return token;
  }
}

export default UserService;
