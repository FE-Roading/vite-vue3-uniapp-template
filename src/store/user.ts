import { defineStore } from 'pinia'

import Storage from "@/utils/storage"
import store from "./index"

export interface UserState {
  token: Nullable<string>

  loginLoading: boolean

}

const userStore = defineStore("user", {
  state: (): UserState  =>({
    token: Storage.getToken(),

    loginLoading: false
  }),

  getters: {
    getLoginStatus(): boolean {
      return !!this.token
    },
    getToken(): Nullable<string> {
      return this.token
    },
  },
  actions: {
    login() {
      this.loginLoading = true
      setTimeout(() => {
        this.token = "mock token"
        this.loginLoading = false

        Storage.saveToken(this.token)
      }, 3000)
    },

    reset() {
      Storage.clear()
      this.token = null
    }
  }
})

export default userStore

export function useUserStore() {
  return userStore(store)
}
