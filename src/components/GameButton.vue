<template>
    <div>
        <button @click="request_number">Click me</button>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
                win_counter: 0,
                loss_counter: 0
            }
        },
        methods: {
          request_number() {
            axios.request({
                url: `http://www.randomnumberapi.com/api/v1.0/randomnumber`
            }).then((response) => {
                if(response[`data`][0] >= 50) {
                    this.win_counter += 1;
                    this.$root.$emit(`win_result`, `${this.win_counter}`)
                } else {
                    this.loss_counter += 1;
                    this.$root.$emit(`loss_result`, `${this.loss_counter}`);
                }
                
            }).catch((error) => {
                error
            })
        },
        
        }
    }
</script>

<style scoped>

</style>