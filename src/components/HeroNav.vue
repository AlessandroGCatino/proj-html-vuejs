<template>
    <div class="hero">
        <div class="hero-nav">
            <div class="container">
                <nav>
                    <figure>
                        <img src="../assets/img/avada-drivers-logo-2x.png" alt="logo">
                    </figure>
                    <div class="d-flex">
                        <ul>
                            <li>home</li>
                            <li>about</li>
                            <li>prices</li>
                            <li>courses <span class="badge">New</span></li>
                            <li>locations</li>
                            <li>blog</li>
                            
                        </ul>
                        <span class="btn btn-success">book now</span>
                    </div>
                </nav>
            </div>
        </div>
        <div class="container testo">
            <h1>
                Drive with Avada
            </h1>
            <h5>
                We offer the finest driving tuition money can buy
            </h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroNav",
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.btn{
    margin-left: 30px;
}
.hero{
    background-image: url("../assets/img/homepage-hero-background.jpg");
    background-position: center;
    background-size: cover;
    .hero-nav{
        background-color: rgba(50, 50, 50, 0.5);
        padding: 20px;
        .container{
            nav{
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-transform: uppercase;
            color: white;
            ul{
                display: flex;
                gap:30px;
                margin: 0;
                li{
                    list-style-type: none;
                    position: relative;
                    padding: 6px 12px;
                    display: flex;
                    align-items: center;
                    span{
                        background-color: $green;
                        margin-left: 5px;
                    }
                    &:hover{
                        color: $green;
                        &::after{

                            position: absolute;
                            content: "";
                            width: 80%;
                            left: 10%;
                            bottom: -5px;
                            border-bottom: 3px solid $green;
                            }
                        }
                    }
                }
            }
                    
            figure{
                margin: 0;
                img{
                    display: block;
                    width: 300px;
                }
            }
        }
    }
}
.container.testo{
    color: white;
    padding-block: 200px;
}

</style>