<template>
    <MainCallback/>
    <MainCTA/>
    <MainPromise/>
    <div id="statistics">
        <div class="container cards">
            <StatsShowcase v-for="(element, index) in stats" :key="index" :percentage="element.num" :stat="element.text"/>
            <figure class="back-stats">
                <svg class="fusion-big-triangle-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:#e4eaed;padding:0;"><path d="M-1 -1 L50 99 L101 -1 Z"></path></svg>
            </figure>
        </div>
    </div>
    <div id="instructors" class="container d-flex">
        <div class="col-8">
            <h1>your instructors</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
        </div>
        <div class="col-4">
            <span class="btn">more about us</span>
        </div>
    </div>
    <div id="instructorsDetails">
        <div class="container d-flex justify-content-between bottom-break">
            <InstructorsCards v-for="(element, index) in instructors" :key="index" :proPic="element.profilePic" :name="element.name"/>
        </div>
    </div>

    <div class="testimonialsback">
        <h1>Testimonials</h1>
        <p>Here's what our happy drivers had to say about our services:</p>
        <MainTestimonials :currentTestimonial="store.testimonials[store.selected]"/>
    </div>
    
</template>

<script>
import InstructorsCards from './InstructorsCards.vue';
import MainCallback from './MainCallback.vue';
import MainCTA from './MainCTA.vue';
import MainPromise from './MainPromise.vue';
import MainTestimonials from './MainTestimonials.vue';
import StatsShowcase from './StatsShowcase.vue';
import {store} from '../store'

export default {
    name: "MainContent",
    components: {
    MainCallback,
    MainCTA,
    MainPromise,
    StatsShowcase,
    InstructorsCards,
    MainTestimonials
},
    data () {
        return {
            store,
            stats:[
                {
                    num: 95,
                    text: "pass rate"
                },
                {
                    num:100,
                    text: "referral rate"
                },
                {
                    num:0,
                    text: "accident rate"
                }
            ],
            instructors:[
                {
                    profilePic:"src/assets/img/instructor-mikehart.jpg",
                    name: "Mike Hart"
                },
                {
                    profilePic:"src/assets/img/instructor-johnsmith.jpg",
                    name: "John Smith"
                },
                {
                    profilePic:"src/assets/img/instructor-angelahart.jpg",
                    name: "Angela Hart"
                }
            ],
            
        }
    }
}
</script>

<style lang="scss">
@use '../styles/partials/mixin.scss' as *;
@use '../styles/partials/variables.scss' as *;

.top-break{
    position: absolute;
    top:-50px;
}
.bottom-break{
    position: absolute;
    bottom: -50px;
    left: 15%;
}
#statistics{
    position: relative;
    .cards{
        display: flex;
        justify-content: space-between;
        padding:20px 0 100px;
    }
    .back-stats{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
    }
}

#instructors{
    // margin-bottom: 800px;
    .col-8{
        h1{
            color: $dark-gray;
            text-transform: capitalize;
            margin-bottom: 50px;
        }
        p{
            font-size: 25px;
            color: $gray;
        }
    }
    .col-4{
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
            width: 80%;
            color: white;
            text-transform: uppercase;
            font-weight: 700;
            &:hover{
                background-color: transparent;
                border: 3px solid $green;
                color: $green;
            }
        }
    }
}
#instructorsDetails{
    margin-top: 100px;
    padding-bottom: 375px;
    position: relative;
}
.testimonialsback{
    background-image: url("../assets/img/testimonial-background.jpg");
    @include adj-bg;
    padding-block: 100px;
    text-align: center;
    h1{
        color: $dark-gray;
    }
    p{
        font-size: 24px;
        color: $gray;
    }
}

</style>