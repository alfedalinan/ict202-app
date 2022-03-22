import axios, { AxiosResponse } from "axios";
import { IAuthRepository } from "src/interfaces/IAuthRepository";
import { injectable } from "tsyringe";

@injectable()
export class AuthRepository implements IAuthRepository {
    
    async getAuth(email?: string, password?: string): Promise<any> {
        
        let url: string = `${process.env.AUTH_API}${process.env.AUTH_ENDPOINT}`;
        let consume: AxiosResponse = await axios.post(url, { email, password });

        if (consume.status == 200) {

            return consume.data;

        }
        
        return null;

    }

}