<template>
    <div>
        <h3>Wins {{ win_result }}</h3>
        <h3>Losses {{ loss_result }}</h3>
    </div>
</template>

<script>

    export default {
        methods: {
            handle_win_result(number) {
               this.win_result += parseInt(number);
            },

            handle_loss_result(number) {
                this.loss_result += parseInt(number);
            }
        },

        data() {
            return {
                win_result: 0,
                loss_result: 0
            }
        },

        mounted () {
            this.$root.$on(`win_result`, this.handle_win_result);
            this.$root.$on(`loss_result`, this.handle_loss_result);
        },
    }
</script>

<style scoped>

</style>