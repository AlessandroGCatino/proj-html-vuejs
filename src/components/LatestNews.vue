<template>
    <div class="back">
        <div class="container top-break">
            <h1>Latest News</h1>
            <div>
                <div v-for="(element) in store.news" class="col-6">
                    <figure>
                        <img :src="element.image" :alt="element.title">
                    </figure>

                    <h4>{{ element.title }}</h4>
                    <span>February 7th, 2019 | <span class="inner">0 Comments</span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
            </div>
            <span class="btn">more from the blog</span>
            <figure>
                <svg class="fusion-big-triangle-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1316" height="50" viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:white;padding:0;"><path d="M-1 -1 L50 99 L101 -1 Z"></path></svg>
            </figure>
        </div>
    </div>
</template>

<script>
import {store} from "../store"
    export default {
        name: "LatestNews",
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/mixin.scss' as *;
@use '../styles/partials/variables.scss' as *;

svg{
    position: absolute;
    bottom: -50px;
    left: 0;
}
.back{
    height: 800px;
    background-image: url("../assets/img/latestnews-background.jpg");
    @include adj-bg;
    position: relative;
    .container{
        left: 15%;
        background-color: white;
        @include shifted-card;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow: -2px 10px 10px 0px rgba(128, 128, 128, 0.5), 2px 0px 10px 0px rgba(128, 128, 128, 0.1), 0px 8px 0px 0px $bluette inset;
        padding: 50px;
        &>div{
            display: flex;
            position: relative;
            margin-bottom: 20px;
            .col-6{
                padding: 20px;
                figure{
                    width: 100%;
                    img{
                        width:100% ;
                    }
                }
                h4{
                    color: $green;
                    margin: 0;
                }
                &>span{
                    display: block;
                    margin-bottom: 12px;
                    font-size: 12px;
                    color: $gray;
                    .inner{
                        color: $green
                    }
                }
            }
        }
        .btn{
            text-transform: uppercase;
            font-weight: 600;
            color: white;
            &:hover{
                color: $green;
            }
        }

    }
}

</style>