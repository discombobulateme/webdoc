import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex)

const SET_USER = 'set account'

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    [SET_USER](state, user) {
      state.user = user
    }
  },
  actions: {
    // AUTHENTICATION
    async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(SET_USER, user.data || null)
    },
    async login({ commit }, credentials) {
      const user = await axios.post('/api/account/session', credentials)
      commit(SET_USER, user.data)
    },
    async register(store, user) {
      return axios.post('/api/account', user)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(SET_USER, null)
    }
  },
  modules: {}
})

export default async () => {
  await store.dispatch('fetchSession')
  return store
}
