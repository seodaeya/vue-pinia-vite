import { defineStore } from "pinia"

export const useTokenStore = defineStore("token", { /*() => {
  const token = ref(0)
  const getToken = computed(() => token.value)
  const setToken = (payload) => {
    token.value = payload
  }

  return { token, getToken, setToken } */
  state: () => {
    return { token: null }
  },
  actions: {
    setToken(payload) {
      console.log(payload)
      this.token = payload
    },
  },
})