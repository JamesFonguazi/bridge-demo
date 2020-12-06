<template>
  <div>
<div class='bold-line'></div>
<div class='container'>
  <div class='window'>
    <div class='overlay'></div>
    <div class='content'>
      <div class='welcome'>SIGN UP</div>
      <div class='subtitle'>Welcome please signup with an email and password</div>

      <form id="accesspanel" action="login" method="post" @submit.prevent="pressed">
      <div class='input-fields'>
        <input type='email' placeholder='Email' class='input-line full-width' v-model="email" :counter="20" :rules="emailRules" label="Email" required />
        <input type='password' placeholder='Password' class='input-line full-width' v-model="password" :rules="passwordRules" label="Password" required/>

      </div>
      <div class='spacing'>or continue to <span class='highlight'><router-link to="/"> Log In</router-link></span></div>
      <div><button class='ghost-round full-width' @click="pressed">SIGN UP</button></div>
      </form>
      <div class="error" v-if="error">{{error.message}}</div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("here");
          this.$router.replace({ name: "Login" });
        })
        .catch(error => (this.error = error));
        
    }
  }
};
</script>

