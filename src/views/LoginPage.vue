<template>
    <div>
        <input type="text" placeholder="email" ref="email_input">
        <input type="password" placeholder="password" ref="password_input">
        <button @click="handle_click">Log In</button>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

    export default {
        methods: {
            handle_click() {
                /* getting the email input by its id from the page
                    use eve.holt@reqres.in when trying to log in*/
                let email_value = this.$refs[`email_input`][`value`];
                let password_value = this.$refs[`password_input`][`value`];

                axios.request({
                    url: `https://reqres.in/api/login`,
                    method: `POST`,
                    data: {
                        email: email_value,
                        password: password_value,
                    }
                }).then((response) => {
                    cookies.set(`token`, response[`data`][`token`]);
                    this.$router.push(`/gamePage`);
                }).catch((error) => {
                    error
                    alert(`Enter a valid email and password.`);
                })
            }
        },
    }
</script>

<style scoped>
div {
    display: grid;
    place-items: canter;
    width: 100%;
    row-gap: 20px;
}

input {
    width: 25%;
    justify-self: center;
}

button {
    width: 15%;
    justify-self: center;
}
</style>