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
import cookies from "vue-cookies";
import ScoreBoard from '@/components/ScoreBoard.vue';
import GameButton from '@/components/GameButton.vue';
export default {
  components: { ScoreBoard, GameButton },
  data() {
    return {
      token: null,
    };
  },
  mounted() {
    this.token = cookies.get(`token`);
  },
};
</script>

<style scoped></style>
