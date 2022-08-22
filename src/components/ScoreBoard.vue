<template>
  <div>
    <h3>Wins {{ win_result }}</h3>
    <h3>Losses {{ loss_result }}</h3>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  methods: {
    handle_win_result(number) {
      this.win_result = parseInt(number);
      cookies.set(`win`, `${this.win_result}`);
    },

    handle_loss_result(number) {
      this.loss_result = parseInt(number);
      cookies.set(`loss`, `${this.loss_result}`);
    },
  },

  data() {
    return {
      win_result: 0,
      loss_result: 0,
    };
  },

  mounted() {
    this.$root.$on(`win_result`, this.handle_win_result);
    this.$root.$on(`loss_result`, this.handle_loss_result);

    if(cookies.get(`win`) !== null) {
      this.win_result = parseInt(cookies.get(`win`));
    }
    if(cookies.get(`loss`) !== null) {
      this.loss_result = parseInt(cookies.get(`loss`));
    }
    
  },
};
</script>

<style scoped></style>
