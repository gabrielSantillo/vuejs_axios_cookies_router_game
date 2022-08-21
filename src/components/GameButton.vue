<template>
    <div>
        <button @click="request_number">Click me</button>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        methods: {
          request_number() {
            axios.request({
                url: `http://www.randomnumberapi.com/api/v1.0/randomnumber`
            }).then((response) => {
                if(response[`data`][0] >= 50) {
                    this.$root.$emit(`win_result`, `1`);
                } else {
                    this.$root.$emit(`loss_result`, `1`);
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