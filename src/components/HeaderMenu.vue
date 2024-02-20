<template>
    <div>
        <div class="data">
            <div class="container phone">
                <small>We have a 95% Successful Pass Rate!</small>
                <small>
                    <i class="fa-solid fa-phone-flip"></i>
                    <span>Give us a call to book your tuition! 1-800-555-555</span>
                </small>
            </div>
        </div>
        <HeroNav/>

    </div>
</template>

<script>
import HeroNav from "./HeroNav.vue"

export default {
    name: "HeaderMenu",
    components: {
        HeroNav
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
    .data{
        background-color: $dark-gray;
        padding: 10px;
        .container.phone{
            color: $gray;
            display: flex;
            justify-content: space-between;
            i{
                margin-right: 10px;
            }
        }
    }

    
</style>