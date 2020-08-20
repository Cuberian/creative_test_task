import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        flats: [],
        liked: [],
    },
    mutations: {
      fetchData(state, payload) {
            state.flats = payload;
            console.log('complete');
      },
      addLiked(state,payload) {
          if(state.liked.indexOf(payload) === -1)
              state.liked.push(payload);
      }
    },
    getters: {
        flats(state) {
            return state.flats
        },

    },
    actions:{
        findLikedFlat(state, payload) {
            return state.liked.indexOf(payload) !== -1
        }
    }

})