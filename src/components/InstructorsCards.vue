<template>
    <div class="cards">
        <figure :title="showInstructor">
            <img :src="proPic" :alt="name">
        </figure>
        <h3>{{ name }}</h3>
        <div>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</template>

<script>
    export default {
        name: "InstructorCards",
        props:{
            proPic:String,
            name: String
        },
        data(){
            return{
                showInstructor:"Instructor "
            }
        },
        methods:{
            prepareTitle(){
                this.showInstructor += this.name
            }
        },
        mounted(){
            this.prepareTitle();
        }

    }
</script>

<style lang="scss" scoped>

@use '../styles/partials/mixin.scss' as *;
@use '../styles/partials/variables.scss' as *;

.cards{
    @include shifted-card;
    box-shadow: -2px 10px 10px 0px rgba(128, 128, 128, 0.5), 2px 0px 10px 0px rgba(128, 128, 128, 0.1), 0px 8px 0px 0px $green inset;
    width: calc(100%/3 - 20px);
    padding: 40px;
    @include flex-column;
    gap: 10px;
    &:hover{
        transform: translateY(10px);
    }
    &>div{
        display: flex;
        gap: 20px;
        color: $gray;
    }
    figure{
        width: 100%;
        img{
            width: 100%;
        }
    }
}

</style>