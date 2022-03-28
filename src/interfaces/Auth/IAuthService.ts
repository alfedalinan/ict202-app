import { AuthDetails } from "src/components/entities/AuthDetails";
import { Credentials } from "src/components/entities/Credentials";

export interface IAuthService {
    login(credentials: Credentials): Promise<AuthDetails>;
}