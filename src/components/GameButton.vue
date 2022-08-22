<template>
  <div>
    <button @click="request_number">Click me</button>
  </div>
</template>

<script>
/* importing axios */
import axios from "axios";
/* importing cookies */
import cookies from "vue-cookies";
export default {
  data() {
    return {
      /* setting the value of the variable to 0 */
      win_counter: 0,
      /* setting the value of the variable to 0 */
      loss_counter: 0,
    };
  },
  methods: {
    /* function called after the button was clicked */
    request_number() {
      /* making a axios request */
      axios
        .request({
          /* URL of the API being requested */
          url: `http://www.randomnumberapi.com/api/v1.0/randomnumber`,
        })
        /* if succeeds */
        .then((response) => {
          /* if the response from the API is bigger and/or equal to 50 */
          if (response[`data`][0] >= 50) {
            /* if the cookie was not setted yet */
            if (cookies.get(`win`) === null) {
              /* add 1 to the variable win_counter */
              this.win_counter += 1;
              /* emmit the the result of the sum above */
              this.$root.$emit(`win_result`, `${this.win_counter}`);
              /* set the cookie with this new value */
              cookies.set(`win`, `${this.win_counter}`);
            } else {
            /* if the cookie was already setted */
              /* get this value from the cookie and add one */
              let value = parseInt(cookies.get(`win`)) + 1;
              /* emmit the the result of the sum above */
              this.$root.$emit(`win_result`, `${value}`);
              /* set the cookie with this new value */
              cookies.set(`win`, `${value}`);
            }
          } else {
          /* if the response from the API was less than 50 */
            /* if the cookie was not setted yet */
            if (cookies.get(`loss`) === null) {
              /* add 1 to the variable win_counter */
              this.loss_counter += 1;
              /* emmit the the result of the sum above */
              this.$root.$emit(`loss_result`, `${this.loss_counter}`);
              /* set the cookie with this new value */
              cookies.set(`loss`, `${this.loss_counter}`);
            } else {
            /* if the cookie was already setted */
              /* get this value from the cookie and add one */
              let value = parseInt(cookies.get(`loss`)) + 1;
              /* emmit the the result of the sum above */
              this.$root.$emit(`loss_result`, `${value}`);
              /* set the cookie with this new value */
              cookies.set(`loss`, `${value}`);
            }
          }
        })
        /* if the API request fails */
        .catch((error) => {
          error;
          /* aler in the page with this message */
          alert(
            `Sorry, there was an error with the request. Please, try again.`
          );
        });
    },
  },
};
</script>

<style scoped></style>
