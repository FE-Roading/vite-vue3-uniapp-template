import { defineStore } from 'pinia'

import store from "../index"

export type DemoUser = {
  name: string
  label: string
}

type DemoState = {
  name: string
  activeUser: Nullable<DemoUser>
  users: DemoUser[]
}

const demoStore = defineStore("demo", {
  state: (): DemoState  => ({
    name: "demo",
    activeUser: null,
    users: []
  }),

  getters: {
    getActiveUser(): Nullable<DemoUser> {
      return this.activeUser
    },
  },
  actions: {
    getUserList() {
      setTimeout(() => {
        const users = Array.from({ length: 5 }).map((_, index) => ({ name: 'name' + index, label: 'label' + index }))
        this.users = users
        this.activeUser = users[0]
      }, 1000)
    }
  }
})

export default demoStore

export function useDemoStore() {
  return demoStore(store)
}
