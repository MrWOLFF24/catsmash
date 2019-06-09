import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCats: '' || JSON.parse(localStorage.getItem('cats-data')),
    top2AndOthers: []
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
      const { data } = response;
      localStorage.setItem('cats-data', JSON.stringify(data));
      await commit('CATS_DATA', data);
    },

    async updateCatsAfterBattle({ commit }, battleResult) {
      const response = await axios.put("/battle", battleResult);
      const { data } = response;
      console.log(data.message);
    },

    async getTopCatsAndOthers({ commit }) {
      const response = await axios.get("/top");
      const { data } = response;
      await commit('TOP2_OTHERS', data);
    }
  }
})
