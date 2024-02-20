<template>
    <MainCallback/>
    <MainCTA/>
</template>

<script>
import MainCallback from './MainCallback.vue';
import MainCTA from './MainCTA.vue';

export default {
    name: "MainContent",
    components: {
        MainCallback,
        MainCTA
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