import crypto from 'crypto-js';

class PasswordManager {
  private SECRET_PASS = 'NodeSecurity_Interview_Task';
  private ITERATIONS = 100;

  encryptPassword(password: string) {
    const salt = crypto.lib.WordArray.random(16);
    const key = crypto.PBKDF2(this.SECRET_PASS, salt, {iterations: this.ITERATIONS});
    const iv = crypto.lib.WordArray.random(16);
    const encrypted = crypto.AES.encrypt(password, key, {iv});
  
    return `${salt.toString()}${iv.toString()}${encrypted.toString()}`;
  }

  decryptPassword(password: string) {
    const salt = crypto.enc.Hex.parse(password.slice(0, 32));
    const key = crypto.PBKDF2(this.SECRET_PASS, salt, {iterations: this.ITERATIONS});
    const iv = crypto.enc.Hex.parse(password.slice(32, 64));
    const decrypted = crypto.AES.decrypt(password.slice(64), key, {iv});
    
    return decrypted.toString(crypto.enc.Utf8);
  }

  verifyPassword(password: string, encryptedPassword: string) {
    const decryptedPassword = this.decryptPassword(encryptedPassword);
    return password === decryptedPassword;
  }
}

export default new PasswordManager();
