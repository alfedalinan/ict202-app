import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { User } from "src/components/entities/User";
import { IUserRepository } from "src/interfaces/User/IUserRespository";
import { getUserData } from "src/utils/Helpers";
import { injectable } from "tsyringe";

@injectable()
export class UserRepository implements IUserRepository {

    async create(user: User): Promise<boolean> {
        
        let url: string = `${process.env.SIGNUP_API}${process.env.SIGNUP_ENDPOINT}`;
        let token: string = getUserData('accessToken');
        let headers: any = {
            "authorizationToken": `Bearer ${token}`
        }

        let consume: AxiosResponse = await axios.post(url, user, {headers});
        console.log(consume);
        if (consume.status == 200) {
            return true;
        }
        
        return false;

    }

}