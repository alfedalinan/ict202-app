import sha256 from "crypto-js/sha256";

export const encryptString = (text: string): string => {
    
    const cryptoJs = require('crypto-js');

    text = sha256(text).toString();
    let cipherIv: any = cryptoJs.AES.encrypt(text, process.env.IV_KEY).toString();
    let cipherText: any = cryptoJs.AES.encrypt(text, process.env.ENCRYPTION_KEY).toString();

    return `${cipherIv}:${cipherText}`;
}

export const getUserData = (key: string): string => {

    let dataString: any = localStorage.getItem(process.env.USER_PREF_KEY);

    let userData: any = JSON.parse(dataString);

    return userData[key];

}