import axios from "axios";
export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
      // console.log(state.token);
    },
    setUser(state, payload) {
      state.user = payload;
      // console.log(state.user);
    },
  },
  actions: {
    async login(context, payload) {
      let response = await axios.post("auth/signin", {
        email: payload.email,
        password: payload.password,
      });
      const token = response.data.token;
      return context.dispatch("attempt", token);
    },

    async attempt(context, payload) {
      if (payload) {
        context.commit("setToken", payload);
      }

      // this action always runs whne we start the app"in main.js" , thats why we need to chick if there is a token
      if (!context.state.token) {
        return;
      }
      // now , the subscriber does its work , setting the header
      // check if the token works
      try {
        let response = await axios.get("auth/me");
        context.commit("setUser", response.data);
      } catch (error) {
        // if there is an error   "like a 401 response"
        context.commit("setUser", null);
        context.commit("setToken", null);
      }
    },
    signOut(context) {
      axios.post("auth/signout").then(() => {
        context.commit("setUser", null);
        context.commit("setToken", null);
      });
    },
  },
  getters: {
    authenticated(state) {
      return state.user && state.token;
    },
    user(state) {
      return state.user;
    },
  },
};
