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
    <div class="instructors">

    </div>
</template>

<script>
import MainCallback from './MainCallback.vue';
import MainCTA from './MainCTA.vue';
import MainPromise from './MainPromise.vue';
import StatsShowcase from './StatsShowcase.vue';

export default {
    name: "MainContent",
    components: {
    MainCallback,
    MainCTA,
    MainPromise,
    StatsShowcase
},
    data () {
        return {
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
            ]
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

</style>