<template>
    <div class="back">
        <div class="container d-flex justify-content-between align-items-center">
            <div>
                <h1>Start Learning to Drive Today</h1>
                <p>Give us a call to schedule your first driving lesson</p>
            </div>
            <div class="phone pe-5">
                <span><i class="fa-solid fa-phone-flip"></i>1-800-555-555</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainCTA"
    }
</script>

<style lang="scss" scoped>
.back{
    background-image: url("../assets/img/horizontal-cta-background.jpg");
    background-position: center;
    background-size: cover;
    color: white;
    &>div{
        padding-block: 60px;
    }
    .phone{
        font-size: 30px;
        i{
            margin-right: 25px;
        }
    }
}
</style>