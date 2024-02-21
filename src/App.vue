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
@use './styles/partials/variables.scss' as *;

.btn{
    color: $white;
    font-weight: 500;
    background-color: $green;
    border: 3px solid $green;
    padding: 6px 20px;
    border-radius: 30px;
    &:hover{
        background-color: transparent;
        border: 3px solid $green;
        color: $green;
    }
}

</style>
