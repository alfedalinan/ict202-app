import axios, { AxiosResponse } from "axios";
import { IAuthRepository } from "src/interfaces/IAuthRepository";

export class AuthRepository implements IAuthRepository {
    
    async getAuth(email?: string, password?: string): Promise<any> {
        
        let url: string = `${process.env.API}${process.env.AUTH_ENDPOINT}`;
        let consume: AxiosResponse = await axios.post(url, { email, password });

        if (consume.status == 200) {

            return consume.data.data;

        }
        
        return null;

    }

}