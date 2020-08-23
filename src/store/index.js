import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        liked: [1],
        flats: [],
    },
    mutations: {
      fetchData(state, payload) {
          console.log('start fetching');
            state.flats = payload;
            console.log('dataIsFetched')
      },
      changeLiked(state,payload) {
          let idIndex = state.liked.indexOf(payload[0]);
          if(!payload[1]) {
              if (idIndex === -1)
                  state.liked.push(payload[0]);
              console.log(state.liked)
          } else {
              state.liked.splice(idIndex, 1);
              console.log(state.liked)
          }
      }
    },
    getters: {
        flats(state) {
            return state.flats
        },

    },
    actions:{
        async waitDataFetching(context,payload) {
            await context.commit('fetchData', payload);
        }
    }

})