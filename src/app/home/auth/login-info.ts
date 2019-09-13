export class AuthLoginInfo {
    userName: string;
    senha: string;
 
    constructor(username: string, password: string) {
        this.userName = username;
        this.senha = password;
    }
}