import "reflect-metadata";
import { IAuthRepository } from "src/interfaces/IAuthRepository";
import { IAuthService } from "src/interfaces/IAuthService";
import { AuthRepository } from "src/repositories/AuthRepository";
import { AuthService } from "src/services/AuthService";
import { container } from 'tsyringe';


container.registerSingleton<IAuthService>("IAuthService", AuthService);
container.registerSingleton<IAuthRepository>("IAuthRepository", AuthRepository);
export const containers = container;