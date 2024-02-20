<template>
    <HeaderMenu/>
    <MainContent/>
    <FooterMenu/>
</template>

<script>
    import axios from 'axios'
    import { store } from './store'
    import HeaderMenu from "./components/HeaderMenu.vue"
    import FooterMenu from "./components/FooterMenu.vue"
    import MainContent from "./components/MainContent.vue"
    
    export default {
        components:{
            HeaderMenu,
            FooterMenu,
            MainContent
        },
        data() {
            return{
                store,
            }
        }
    }


</script>


<style lang="scss">

@use "./styles/general.scss";

</style>
