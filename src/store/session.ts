import md5 from 'md5'
import { defineStore } from 'pinia'
import type { UserFull } from '~/def/user'

export const useSession = defineStore('session', {
  state: (): {
    loggedIn: boolean
    userId?: string
    user?: Omit<UserFull<string>, 'statistics'>
    role: {
      staff: boolean
    }
  } => ({
    loggedIn: false,
    user: undefined,
    userId: undefined,
    role: {
      staff: false,
    },
  }),
  actions: {
    async gotSession() {
      if (!this.user) {
        return
      }
      this.role = computeUserRoles(this.user)
    },
    async login(handle: string, passwordText: string) {
      const md5HashedPassword = md5(passwordText)
      const result = await this.loginHashed(handle, md5HashedPassword)
      await this.gotSession()
      return result
    },
    async loginHashed(handle: string, md5HashedPassword: string) {
      const app$ = useNuxtApp()
      const result = await app$.$client.session.login.query({
        handle,
        md5HashedPassword,
      })
      if (!result) {
        return false
      }

      this.$patch({
        loggedIn: true,
        userId: result.user.id,
        user: result.user,
      })
      return true
    },
    async destroy() {
      const app$ = useNuxtApp()
      await app$.$client.session.destroy.mutate()
      await this.retrieve()
    },
    async retrieve() {
      try {
        const app$ = useNuxtApp()
        const result = await app$.$client.session.retrieve.query()
        if (!result.user) {
          this.$reset()
          return false
        }
        this.$patch({
          loggedIn: true,
          userId: result.user.id,
          user: result.user,
        })
        await this.gotSession()
        return true
      }
      catch (err) {
        // TODO: fix err is empty
        this.$reset()
        return false
      }
    },
    setAvatarTimestamp() {
      if (!this.user) {
        return
      }

      this.user.avatarSrc = `${this.user.avatarSrc}?${Date.now()}`
    },
  },

})
