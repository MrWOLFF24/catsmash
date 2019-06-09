import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCats: '' || JSON.parse(localStorage.getItem('cats-data')),
    top2AndOthers: '' || JSON.parse(localStorage.getItem('top-cats-data'))
  },
  mutations: {
    CATS_DATA(state, cats) {
      state.allCats = cats
    },
    TOP2_OTHERS(state, catsData) {
      state.top2AndOthers = catsData
    }
  },
  actions: {
    async getAllCats({ commit }) {
      const response = await axios.get("/cats");
      const { data } = await response;
      localStorage.setItem('cats-data', JSON.stringify(data));
      await commit('CATS_DATA', data);
    },

    async getTopCatsAndOthers({ commit }) {
      const response = await axios.get("/top");
      const { data } = await response;
      localStorage.setItem('top-cats-data', JSON.stringify(data));
      commit('TOP2_OTHERS', data);
    }
  }
})
