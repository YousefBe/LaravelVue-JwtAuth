import store from "@/store";
import axios from "axios";

store.subscribe((mutations) => {
  switch (mutations.type) {
    case "authModule/setToken":
      if (mutations.payload) {
        // we always want send the token in the header
        axios.defaults.headers.common[
          `Authorization`
        ] = `Bearer ${mutations.payload}`;

        localStorage.setItem("token", mutations.payload);
      } else {
        // this is trigred when we set token to null
        axios.defaults.headers.common[`Authorization`] = null;
        localStorage.removeItem("token");
      }
      break;

    default:
      break;
  }
});
