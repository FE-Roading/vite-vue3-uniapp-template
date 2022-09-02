const TOKEN_KEY = "user_token"

export default class Storage{
  static getToken(): Nullable<string> {
    return uni.getStorageSync(TOKEN_KEY)
  }

  static saveToken(token: string) {
    uni.setStorageSync(TOKEN_KEY, token)
  }

  static clear() {
    uni.clearStorageSync()
  }
}
