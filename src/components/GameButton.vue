<template>
  <div>
    <input type="number" ref="wager_number">
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
      points: 100,
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
            if (cookies.get(`cookie_result`) === null) {
              /* add the value of the input to the variable points */
              this.points += this.$refs[`wager_number`][`valueAsNumber`];
              /* emmit the the result of the sum above */
              this.$root.$emit(`result`, `${this.points}`);
              /* set the cookie with this new value */
              cookies.set(`cookie_result`, `${this.points}`);
            } else {
            /* if the cookie was already setted */
              /* get this value from the cookie and add the new or the same value of the input, as the user wants */
              let value = parseInt(cookies.get(`cookie_result`)) + this.$refs[`wager_number`][`valueAsNumber`];
              /* emmit the the result of the sum above */
              this.$root.$emit(`result`, `${value}`);
              /* set the cookie with this new value */
              cookies.set(`cookie_result`, `${value}`);
            }
          } else {
          /* if the response from the API was less than 50 */
            /* if the cookie was not setted yet */
            if (cookies.get(`cookie_result`) === null) {
              /* subtract the value of the input to the variable points */
              this.points -= this.$refs[`wager_number`][`valueAsNumber`];
              /* emmit the the result of the sum above */
              this.$root.$emit(`result`, `${this.points}`);
              /* set the cookie with this new value */
              cookies.set(`cookie_result`, `${this.points}`);
            } else {
            /* if the cookie was already setted */
              /* get this value from the cookie and subtract the new or the same value of the input, as the user wants */
              let value = parseInt(cookies.get(`cookie_result`)) - this.$refs[`wager_number`][`valueAsNumber`];
              /* emmit the the result of the sum above */
              this.$root.$emit(`result`, `${value}`);
              /* set the cookie with this new value */
              cookies.set(`cookie_result`, `${value}`);
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
