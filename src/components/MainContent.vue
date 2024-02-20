<template>
    <MainCallback/>
</template>

<script>
import MainCallback from './MainCallback.vue';

export default {
    name: "MainContent",
    components: {
        MainCallback
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