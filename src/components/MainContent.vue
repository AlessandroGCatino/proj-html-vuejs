<template>
    <MainCallback/>
    <MainCTA/>
    <MainPromise/>
</template>

<script>
import MainCallback from './MainCallback.vue';
import MainCTA from './MainCTA.vue';
import MainPromise from './MainPromise.vue';

export default {
    name: "MainContent",
    components: {
    MainCallback,
    MainCTA,
    MainPromise
},
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">

.top-break{
    position: absolute;
    top:-50px;
}

</style>