import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCats: '' || JSON.parse(localStorage.getItem('cats-data'))
  },
  mutations: {
    CATS_DATA(state, cats) {
      state.allCats = cats
    }
  },
  actions: {
    async getAllCats({ commit }) {
      const response = await axios.get("/cats");
      const { data } = await response;
     localStorage.setItem('cats-data', JSON.stringify(data));
     commit('CATS_DATA', data);
    }
  },
  getters: {

  }
})
