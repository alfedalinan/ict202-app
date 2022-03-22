import { AuthDetails } from "src/components/entities/AuthDetails";
import { Credentials } from "src/components/entities/Credentials";
import { IAuthRepository } from "src/interfaces/IAuthRepository";
import { IAuthService } from "src/interfaces/IAuthService";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthService implements IAuthService {
    
    constructor(
        @inject("IAuthRepository") private authRepository: IAuthRepository
    ) { }
    
    async login(credentials: Credentials): Promise<AuthDetails> {
        
        let authDetails: AuthDetails = await this.authRepository.getAuth(credentials.email, credentials.password);
        return authDetails;

    }
    
}