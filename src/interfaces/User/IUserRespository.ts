import { User } from "src/components/entities/User";

export interface IUserRepository {
    create(user: User): Promise<boolean>;
}