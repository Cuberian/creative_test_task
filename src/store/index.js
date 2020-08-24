import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueResource);


export default new Vuex.Store({
    state: {
        liked: [],
        flats: [],
    },
    mutations: {
      fetchFlatData(state, payload) {
            state.flats = payload;
      },
      fetchLikedData(state, payload) {
          payload.forEach(obj => {
              state.liked.push(obj.id);
          });
      },
      changeLiked(state,payload) {
          let idIndex = state.liked.indexOf(payload[0]);
          if(!payload[1]) {
              if (idIndex === -1) {
                  state.liked.push(payload[0]);
                  Vue.http.post('http://localhost:3000/liked', {id:payload[0]})
              }
          } else {
              state.liked.splice(idIndex, 1);
              Vue.http.delete('http://localhost:3000/liked/'+payload[0]).then( response => {
              })
          }
      }
    },
    getters: {
        flats(state) {
            return state.flats
        },

    },
    actions:{
        dataFlatFetching(context,payload) {
            context.commit('fetchFlatData', payload);
        },
        dataLikedFetching(context,payload) {
            context.commit('fetchLikedData', payload);
        }
    }

})