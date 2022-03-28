import { User } from "src/components/entities/User";
import { IUserRepository } from "src/interfaces/User/IUserRespository";
import { IUserService } from "src/interfaces/User/IUserService";
import { injectable, inject } from "tsyringe";

@injectable()
export class UserService implements IUserService {
    
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) { }

    async createOne(user: User): Promise<boolean> {
        
        return await this.userRepository.create(user);

    }
    
}