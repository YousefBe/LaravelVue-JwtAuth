<template>
  <nav class="navBar">
    <ul class="navList">
      <li class="nav-item">
        <router-link to="/">Home</router-link>
      </li>
      <template v-if="!authenticated">
        <li class="nav-item">
          <router-link to="/signin">sign-in</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup">sing-up</router-link>
        </li>
      </template>
      <template v-if="authenticated">
        <li class="nav-item">
          <router-link to="/dashboard">{{ user.name }}</router-link>
        </li>
        <a href="#" @click.prevent="signOut">signout</a>
      </template>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "authModule/authenticated",
      user: "authModule/user",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "authModule/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "Home",
        });
      });
    },
  },
};
</script>

<style scoped></style>
