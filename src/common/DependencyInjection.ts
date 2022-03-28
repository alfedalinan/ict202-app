import "reflect-metadata";
import { IAuthRepository } from "src/interfaces/Auth/IAuthRepository";
import { IAuthService } from "src/interfaces/Auth/IAuthService";
import { IUserRepository } from "src/interfaces/User/IUserRespository";
import { IUserService } from "src/interfaces/User/IUserService";
import { AuthRepository } from "src/repositories/AuthRepository";
import { UserRepository } from "src/repositories/UserRepository";
import { AuthService } from "src/services/AuthService";
import { UserService } from "src/services/UserService";
import { container } from 'tsyringe';

container.registerSingleton<IAuthService>("IAuthService", AuthService);
container.registerSingleton<IAuthRepository>("IAuthRepository", AuthRepository);
container.registerSingleton<IUserRepository>("IUserRepository", UserRepository);
container.registerSingleton<IUserService>("IUserService", UserService);

export const containers = container;