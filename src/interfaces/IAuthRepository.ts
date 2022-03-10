
export interface IAuthRepository {
    getAuth(email?: string, password?: string): Promise<any>;
}