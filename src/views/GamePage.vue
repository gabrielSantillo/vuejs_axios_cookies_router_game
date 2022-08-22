<template>
  <div>
    <div v-if="token !== null">
        <game-button></game-button>
        <score-board></score-board>
    </div>

    <div v-else>
      <h1>To access the Game Page you should must log in.</h1>
      <router-link to="/">Go back</router-link>
    </div>
  </div>
</template>

<script>
/* importing cookies */
import cookies from "vue-cookies";
/* importing the component ScoreBoard */
import ScoreBoard from '@/components/ScoreBoard.vue';
/* importing the component GameButton */
import GameButton from '@/components/GameButton.vue';
export default {
  components: { ScoreBoard, GameButton },
  data() {
    return {
      /* setting the token value as null */
      token: null,
    };
  },
  mounted() {
    /* setting the token to the value of the cookie `token` */
    this.token = cookies.get(`token`);
  },
};
</script>

<style scoped></style>
