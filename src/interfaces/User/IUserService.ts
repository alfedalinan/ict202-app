import { User } from "src/components/entities/User";

export interface IUserService {
    createOne(user: User): Promise<boolean>;
}