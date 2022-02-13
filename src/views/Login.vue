<template>
  <div>
    <h2>ログイン</h2>
    <label for="name">Email:</label>
    <input id="email" type="email" v-model="email" />
    <br /><br />
    <label for="password">パスワード:</label>
    <input id="password" type="password" v-model="password" /> <br /><br />
    <button @click="login">送信</button>
  </div>
</template>

<script>
import axios from "../axios-auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyD5omkikJJUyixUQN1r4b6FZNTd-gehg_Y",
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
        });
      this.email = "";
      this.password = "";
    },
  },
};
</script>
