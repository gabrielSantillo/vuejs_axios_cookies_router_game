<template>
  <div>
    <h3>Wins {{ win_result }}</h3>
    <h3>Losses {{ loss_result }}</h3>
  </div>
</template>

<script>
/* importing the cookies */
import cookies from "vue-cookies";
export default {
  methods: {
    /* when the page loads this function is called if the the emmit that was listenned was the `win_result` */
    handle_win_result(number) {
      /* passing the value of the the listenner to the variable and transforming in a number since the value was a string */
      this.win_result = parseInt(number);
    },
    /* when the page loads this function is called if the the emmit that was listenned was the `win_result` */
    handle_loss_result(number) {
      /* passing the value of the the listenner to the variable and transforming in a number since the value was a string */
      this.loss_result = parseInt(number);
    },
  },

  data() {
    return {
      /* setting the value to zero */
      win_result: 0,
      /* setting the value to zero */
      loss_result: 0,
    };
  },

  mounted() {
    /* listening the emmit `win_result and calling the function handle_win_result` */
    this.$root.$on(`win_result`, this.handle_win_result);
    /* listening the emmit `loss_result` and calling the function handle_loss_result */
    this.$root.$on(`loss_result`, this.handle_loss_result);

    /* if the cookie was already setted, or different than null */
    if (cookies.get(`win`) !== null) {
      /* getting the cookie value and passing the value to the variable */
      this.win_result = parseInt(cookies.get(`win`));
    }
    /* if the cookie was already setted, or different than null */
    if (cookies.get(`loss`) !== null) {
      /* getting the cookie value and passing the value to the variable */
      this.loss_result = parseInt(cookies.get(`loss`));
    }
  },
};
</script>

<style scoped></style>
