<template>
  <div>
    <input type="text" placeholder="email" ref="email_input" />
    <input type="password" placeholder="password" ref="password_input" />
    <button @click="handle_click">Log In</button>
  </div>
</template>

<script>
/* importing axios */
import axios from "axios";
/* importing cookies */
import cookies from "vue-cookies";

export default {
  methods: {
    handle_click() {
      /* getting the email input by its reference from the page
                    use eve.holt@reqres.in when trying to log in*/
      let email_value = this.$refs[`email_input`][`value`];
      /* getting the password value by its reference from the page
                    any password will worl */
      let password_value = this.$refs[`password_input`][`value`];

      /* Making a axios request */
      axios
        .request({
          /* URL of the API */
          url: `https://reqres.in/api/login`,
          /* posting the value such as email and password */
          method: `POST`,
          /* parameter data which the post will be made */
          data: {
            /* user email */
            email: email_value,
            /* user password */
            password: password_value,
          },
        })
        /* if succeeds */
        .then((response) => {
          /* setting a cookie with the token returned form the API */
          cookies.set(`token`, response[`data`][`token`]);
          /* leaving the user to the page after logged in */
          this.$router.push(`/gamePage`);
        })
        /* if fails */
        .catch((error) => {
          error;
          /* alert in the page telling to try a valid email and password */
          alert(`Enter a valid email and password.`);
        });
    },
  },
};
</script>

<style scoped>
div {
  display: grid;
  place-items: canter;
  width: 100%;
  row-gap: 20px;
}

input {
  width: 25%;
  justify-self: center;
}

button {
  width: 15%;
  justify-self: center;
}
</style>
