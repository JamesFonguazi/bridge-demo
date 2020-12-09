<template>
  <div>

<div class="grid min-h-screen place-items-center">
  <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 class="text-xl font-semibold">Welcome back , <span class="font-normal">sign in to continue</span></h1>
    <form class="mt-6" @submit.prevent="pressed">
      <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
      <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" v-model="email" :counter="20" :rules="emailRules" label="Email" required />
      <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
      <input id="password" type="password" name="password" placeholder="********" autocomplete="current-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" v-model="password" :rules="passwordRules" label="Password" required />
      <button @click="pressed" type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Sign Up
      </button>
      <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"><router-link to="/">Sign In to account</router-link></p>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
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
          // eslint-disable-next-line no-console
          console.log("here");
          this.$router.replace({ name: "Login" });
        })
        .catch(error => (this.error = error));
        
    }
  }
};
</script>

