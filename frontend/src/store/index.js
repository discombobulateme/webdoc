import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex)

const SET_USER = 'set account'
const INCREMENT_COUNT = 'increment count'

const store = new Vuex.Store({
  state: {
    count: 0,
    user: null
  },
  mutations: {
    [INCREMENT_COUNT](state) {
      state.count++
    },
    [SET_USER](state, user) {
      state.user = user
    }
  },
  actions: {
    incrementCount({ commit }) {
      commit(INCREMENT_COUNT)
    },
    async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/athletes/${id}`)
      return userRequest.data
    },
    async fetchUsers() {
      const usersRequest = await axios.get('/api/athletes')
      return usersRequest.data
    },

    // AUTHENTICATION
    async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(SET_USER, user.data || null)
    },

    // LOGIN, REGISTER, LOGOUT sessions
    async login({ commit }, credentials) {
      try {
        const user = await axios.post('/api/account/session', credentials)
        commit(SET_USER, user.data || null)
      } catch (error) {
        throw error
      }
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
