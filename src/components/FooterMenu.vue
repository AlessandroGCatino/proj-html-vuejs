<template>
    <div class="backbig">
        <div class="container d-flex">
            <div class="col-3 resume">
                <figure>
                    <img src="../assets/img/avada-drivers-logo-2x.png" alt="footer-logo">
                </figure>
                <p>
                    Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time.
                </p>
            </div>
            <div class="col-3 contacts">
                <h6>contact details</h6>
                <ul>
                    <li>
                        <i class="fa-solid fa-house-chimney"></i>
                        <span>
                            12345 North Main Street, New York, NY 555555
                        </span>
                    </li>
                    <li>
                        <i class="fa-solid fa-phone-flip"></i>
                        <span>
                            1.800.555.6789
                        </span>
                    </li>
                    <li>
                        <i class="fa-regular fa-envelope"></i>
                        <span>
                            info@your-domain.com
                        </span>
                    </li>
                    <li>
                        <i class="fa-solid fa-link"></i>
                        <span>
                            Theme-Fusion.com
                        </span>
                    </li>
                </ul>
            </div>
            <div class="col-3 courses">
                <h6>courses</h6>
                <ul>
                    <li>
                        <i class="fa-regular fa-circle-arrow-right"></i>
                        <span>Pass Plus</span>
                    </li>
                    <li>
                        <i class="fa-regular fa-circle-arrow-right"></i>
                        <span>Intensive Course</span>
                    </li>    
                    <li>
                        <i class="fa-regular fa-circle-arrow-right"></i>
                        <span>Automatic</span>
                    </li>    
                    <li>
                        <i class="fa-regular fa-circle-arrow-right"></i>
                        <span>Instructor Training</span>
                    </li>    
                </ul>
                
            </div>
            <div class="col-3 stats">
                <figure>
                    <img src="../assets/img/footer-grid.png" alt="">
                </figure>
                <span class="btn">BOOK NOW</span>

            </div>
        </div>
    </div>
    <footer>
        <div class="container d-flex py-5 justify-content-between ">
            <div class="credits">
                <p>© Copyright 2012 - 2020 | Avado Theme by <span>ThemeFusion</span> | All Rights Reserved | Powered by <span>WordPress</span></p>
            </div>
            <div class="d-flex gap-3 socials">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterMenu",
    
}
</script>

<style lang="scss" scoped>

@use '../styles/partials/mixin.scss' as *;
@use '../styles/partials/variables.scss' as *;

ul{
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    li{
        font-size: 14px;
        list-style-type: none;
        width: 60%;
        color: $gray;
        display: flex;
        align-items: center;
        gap: 15px;
        i{
            color:$light-gray;
            opacity: 0.8;
        }
        &:hover{
            opacity: 0.7;
            cursor: pointer;
        }
    }
}

footer{
    background-color: #1c1d1e;
    .credits{
        color: $gray;
        span{
            color: $green;
        }
    }
    .socials{
        color: $light-gray;
    }
}

.backbig{
    
    background-image: url("../assets/img/footer-background-color.jpg");
    h6{
        color: white;
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 20px;
    }
    .col-3{
        padding: 50px 10px 50px 0px;
    }
    .resume{
        color: $gray;
        font-size: 15px;
        figure{
            img{
                width: 90%;
            }
        }
    }
    .courses{
        ul{
            li{
                font-size: 18px;
                color: $green;
                .fa-circle-arrow-right{
                    font-weight: 900;
                    font-size: 22px;
                    color: $green;
                }
            }
        }
    }
    .stats{
        @include flex-column;
        figure{
            width: 70%;
            img{
                width: 100%;
            }
        }
    }
}

</style>