<template>
  <form @submit.prevent="submit">
    <div class="">
      <label for="email" class="label">Email</label>
      <input type="email" placeholder="email" v-model="form.email.value" />
    </div>
    <div class="">
      <label for="password" class="label">password</label>
      <input
        type="password"
        placeholder="password"
        v-model="form.password.value"
      />
    </div>
    joebelal7@gmail.com
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: {
          value: "",
          isValid: true,
        },
        password: {
          value: "",
          isValid: true,
        },
      },
    };
  },
  name: "signin",
  methods: {
    submit() {
      // we can also use mapActions
      this.$store
        .dispatch("authModule/login", {
          email: this.form.email.value,
          password: this.form.password.value,
        })
        .then(() => {
          this.$router.replace({
            name: "dashBoard",
          });
        });
    },
  },
};
</script>

<style scoped>
.label {
  display: inline-block;
  margin-right: 2px;
  width: 5rem;
}
</style>
