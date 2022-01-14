// import dependency to handle HTTP request to our back end
import axios from "axios"
import Vuex from "vuex"
import Vue from "vue"

//load Vuex
Vue.use(Vuex)

//to handle state
const state = {
  files: [],
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  getPosts({ commit }) {
    axios.get("http://localhost:8888/api").then(response => {
      commit("SET_POSTS", response.data)
    })
  },
}

//to handle mutations
const mutations = {
  SET_POSTS(state, files) {
    state.files = files
  },
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
