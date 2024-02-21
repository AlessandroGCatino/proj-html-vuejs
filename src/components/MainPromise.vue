<template>
    <div class="back">
        <div class="container d-flex">
            <div class="col-4">
                <div class="promise top-break">
                    <h1>Courses</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sopien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                    <span class="btn">course information</span>
                </div>
            </div>
            <div class="col-7 d-flex">
                <div v-for="(element) in courses" class="course">
                    <figure>
                        <img :src="element.image" alt="">
                    </figure>
                    <h5 class="coursename">{{ element.text }}</h5>
                    <span class="btn">learn more</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainPromise",
        data(){
            return{
                courses:[
                    {
                        image:"src/assets/img/courses-passplus.jpg",
                        text:"Pass Plus"
                    },
                    {
                        image:"src/assets/img/course-intensive.jpg",
                        text:"Intensive Course"
                    },
                    {
                        image:"src/assets/img/courses-instructor.jpg",
                        text:"Instructors"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../styles/partials/mixin.scss' as *;
@use '../styles/partials/variables.scss' as *;

.btn{
    color: white;
    font-weight: bold;
    text-transform: uppercase;
}
.back{
    background-image: url("../assets/img/promise-backgroundv3.jpg");
    @include adj-bg;

    
    .col-4{
        position: relative;
        padding: 0px 20px 0px 0px;
        .promise{
            background-image: url("../assets/img/new-corner.jpg");
            background-position: top left;
            background-size: 100px 100px;
            background-repeat: no-repeat;
            @include shifted-card;
            width: 90%;
            @include flex-column;
            gap: 50px;
            
        }
    }
    .col-7{
        padding-block: 50px;
        .course{
            width: calc(100% / 3);
            @include flex-column;
            gap: 10px;

            padding: 20px 0 50px;
            figure{
                margin: 0;
                width: 150px;
                img{
                    width: 100%;
                }
            }
            .coursename{
                color: $bluette;
                font-size: 22px;
            }
            .btn{
                background-color: transparent;
                border-color: $bluette;
                color: $bluette;
                font-size: 12px;
                &:hover{
                    background-color: $bluette;
                    color: $white;
                    
                }
            }
            transition: all 0.5s ease-in-out;
            &:hover{
                scale: 110%;
                transition: all 0.5s ease-in-out;
            }
        }
    }
}

</style>