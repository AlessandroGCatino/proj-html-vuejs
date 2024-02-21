<template>
    <div class="back">
        <div class="container">
            <div class="col-6">
                <h2>Sign up to our Newsletter</h2>
                <input type="email" v-model="email" @keyup.enter="subscribe()">
                <span class="btn" @click="subscribe()">subscribe</span>
                <p>(We do not share your data with anybody, and only use it for ts intended purpose)</p>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from "../store"
    export default {
        name: "NewsletterInscription",
        data(){
            return{
                store,
                email:""
            }
        },
        methods:{
            subscribe(){
                if(this.email.includes("@") && !store.subscribers.includes(this.email)){
                    store.subscribers.push(this.email)
                    alert("You have successfuly registered your email!")
                    this.email = ""
                } else if (store.subscribers.includes(this.email)){
                    alert("Mail already registered")
                } else {
                    alert("Insert a correct email")
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/mixin.scss' as *;
@use '../styles/partials/variables.scss' as *;

.back{
    padding: 50px;
    background-image: url("../assets/img/newsletter_background.jpg");
    @include adj-bg;
    .container{
        .col-6{
            margin: 0 auto;
            @include flex-column;
            gap: 30px;
            input{
                width: 90%;
                height: 45px;
                border: 1px solid $light-gray;
                &:focus{
                    border: 1px solid $light-gray;
                }
            }
            .btn{
                width: 90%;
                color: white;
                text-transform: uppercase;
                &:hover{
                    color: $green;
                }
            }
            p{
                color: $gray;
                font-size: 14px;
            }
        }

    }
}

</style>