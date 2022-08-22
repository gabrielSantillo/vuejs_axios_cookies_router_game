<template>
    <div>
        <button @click="request_number">Click me</button>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
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
                    if(cookies.get(`win`) === null) {
                        this.win_counter += 1;
                        this.$root.$emit(`win_result`, `${this.win_counter}`);
                        cookies.set(`win`, `${this.win_counter}`);
                    } else {
                        let value = parseInt(cookies.get(`win`)) + 1
                        this.$root.$emit(`win_result`, `${value}`);
                        cookies.set(`win`, `${value}`);
                    }
                    
                   
                } else {
                    if(cookies.get(`loss`) === null) {
                        this.loss_counter += 1;
                        this.$root.$emit(`loss_result`, `${this.loss_counter}`);
                        cookies.set(`loss`, `${this.loss_counter}`);
                    } else {
                        let value = parseInt(cookies.get(`loss`)) + 1
                        this.$root.$emit(`loss_result`, `${value}`);
                        cookies.set(`loss`, `${value}`);
                    }
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