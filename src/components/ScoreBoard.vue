<template>
  <div>
    <h3>Wins {{ started_points }}</h3>
  </div>
</template>

<script>
/* importing the cookies */
import cookies from "vue-cookies";
export default {
  methods: {
    /* when the page loads this function is called */
    handle_result(number) {
      /* passing the value of the the listenner to the variable */
      this.started_points = parseInt(number);
    },
  },

  data() {
    return {
      /* setting the value to 100 */
      started_points: 100,
    };
  },

  mounted() {
    /* listening the emmit `resukt` and calling the function handle_result */
    this.$root.$on(`result`, this.handle_result);

    /* if the cookie was already setted, or different than null */
    if (cookies.get(`cookie_result`) !== null) {
      /* getting the cookie value and passing the value to the variable started_points */
      this.started_points = parseInt(cookies.get(`cookie_result`));
    }
  },
};
</script>

<style scoped></style>
