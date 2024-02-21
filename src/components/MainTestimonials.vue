<template>
    <div class="container" :class="isChanging?'fade':''">
        <figure>
            <img :src="currentTestimonial.image" :alt="currentTestimonial.name">
        </figure>
        <p>{{ currentTestimonial.quote }}</p>
        <h4>{{ currentTestimonial.name }}</h4>
        <div class="dots">
            <div v-for="(element, index) in store.testimonials" 
            :key="index" 
            class="dot"
            :class="[index == store.selected?'active':'']"
            @click="setActive(index)"></div>
        </div>
    </div>
    
</template>

<script>
import {store} from "../store"

export default {
        name: "MainTestimonials",
        props:{
            currentTestimonial: Object
        },
        data(){
            return{
                store,
                isChanging: false
            }
        },
        methods:{
            setActive(index){
                
                this.isChanging = true
                setTimeout(() => {
                    store.selected = index
                    this.isChanging = false
                }, 600)
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/mixin.scss' as *;
@use '../styles/partials/variables.scss' as *;

div.container{
    transition: all 0.6s;
    margin-top: 50px;
    @include flex-column;
    gap: 30px;
    figure{
        width: 180px;
        img{
            width: 100%;
        }
    }
    p,
    h4{
        width: 750px;
    }
    h4{
        color: $gray;
    }
    .dots{
        display: flex;
        gap: 10px;
        .dot{
            border: 1px solid $gray;
            width: 15px;
            aspect-ratio: 1;
            border-radius: 50%;
            cursor: pointer;
        }
        .dot.active{
            background-color: $gray;
        }
    }
}

.div.container.fade{
    transition: all 0.6s;
    opacity: 0;
}
</style>