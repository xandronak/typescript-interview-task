import faker from 'faker';

interface TokenData {
  token: string,
  userId: string,
  expireAt: string,
}

class TokenManager {
  // 15 minutes token validity
  private TOKEN_VALIDITY = 1000 * 60 * 15;

  private tokens: Array<TokenData> = [];

  addToken(token: string, userId: string) {
    // Tokens should have expiration time
    const expireAt = new Date(new Date().getTime() + this.TOKEN_VALIDITY).toISOString();
    this.tokens.push({ token, userId, expireAt });
  }

  removeToken(token: string) {
    this.tokens = this.tokens.filter(({ token: t }) => t !== token);
  }

  findToken(token: string) {
    return this.tokens.find(({token: t }) => t === token);
  }

  isTokenValid(token: string) {
    const storedToken = this.findToken(token);
  
    return storedToken?.expireAt ? (
      new Date().getTime() < new Date(storedToken.expireAt).getTime()
    ) : false;
  }

  getTokenOwnerId(token: string) {
    return this.findToken(token)?.userId || null;
  }

  generateToken() {
    return faker.random.alphaNumeric(24);
  }
}

export default new TokenManager();
