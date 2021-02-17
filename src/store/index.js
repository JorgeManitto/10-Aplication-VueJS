import { createStore } from 'vuex'

export default createStore({
  state: {
    
      isLoggedIn:false,
      authUser:{},
    
  },
  mutations: {
    setLoggedIn(state,payload){
      state.isLoggedIn = payload;
    },
    setauthUser(state,payload){
      state.authUser =  payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
