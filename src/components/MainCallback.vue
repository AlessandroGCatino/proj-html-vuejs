<template>
    <div id="line">
        <div class="container d-flex">
            <div class="col-6 left">
                <h1 class="text-capitalize">
                    get behind the wheel
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices auctor sapien id cursus. Aliquam maximus
                    turpis in vehicula semper.
                </p>
                <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices
                    auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.
                    Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh. Nunc
                    ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula
                    semper. Fusce et ultrices libero, at suscipit lacus. Sed vitoe fringilla nibh.
                </small>
            </div>
            <div class="col-6 right">
                <div class="top-break callback">
                    <h2 class="text-capitalize">first lesson free!</h2>
                    <p>When you make a block booking with us your first lesson is included free</p>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Your Name*" v-model="newCallback.name">
                        <span class="input-group-text">
                            <img src="../assets/img/nametag.png" alt="nametag" title="Rubrica" @click="mostraRubrica()">

                            <div class="rubrica" :class="show?'show':''">
                                <div v-for="(elements, index) in rubrica" @click="setContact(index)">
                                    {{elements.name}}
                                </div>
                            </div>
                        </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Email" v-model="newCallback.mail">
                    <input type="text" class="form-control" placeholder="Telephone" v-model="newCallback.phone">
                    <input type="text" class="form-control" placeholder="Location" v-model="newCallback.location">
                    <span class="btn" @click="getAppointment()">request a callback</span>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from "../store"
    export default {
        name: "MainCallback",
        data(){
            return{
                store,
                newCallback:{
                    name:"",
                    mail:"",
                    phone:"",
                    location:""
                },
                show: false,
                rubrica:[
                    {
                        name:"Aldo",
                        mail:"aldo@mail.it",
                        phone:"2224457412",
                        location:"Sicilia"
                    },
                    {
                        name:"Giovanni",
                        mail:"giova@mail.it",
                        phone:"2255886969",
                        location:"Lombardia"
                    },
                    {
                        name:"Giacomo",
                        mail:"jack@gmail.it",
                        phone:"1174485465",
                        location:"Abruzzo"
                    }
                ]
            }
        },
        methods:{
            getAppointment(){
                if (this.newCallback.name != "" && this.newCallback.mail != "" && this.newCallback.phone != "" && this.newCallback.location != ""){
                    const newCall = {...this.newCallback}
                    store.callbacks.push(newCall)
                    alert("We'll contact you as soon as possible!")
                    // setTimeout(() => {
                        this.newCallback.name = ""
                        this.newCallback.mail = ""
                        this.newCallback.phone = ""
                        this.newCallback.location = ""
                    // }, 1000)
                    
                } else {
                    alert("Fill all the fields")
                }
            },
            mostraRubrica(){
                if (this.show){
                    this.show=false
                } else {
                    this.show=true
                    setTimeout(() => {this.show = false
                }, 2000)
                }
            },
            setContact(index){
                this.newCallback.name = this.rubrica[index].name
                this.newCallback.mail = this.rubrica[index].mail
                this.newCallback.phone = this.rubrica[index].phone
                this.newCallback.location = this.rubrica[index].location
            }
        }
    }
</script>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *; 
@use '../styles/partials/mixin.scss' as *;
#line{
    background-color: $light-gray;
}

.btn{
    width: fit-content;
    text-transform: uppercase;
    color: $white;
    font-weight: bold;
}
.col-6{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 60px;
    
    .callback{
        @include shifted-card;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        input{
            padding: 15px 20px;
            background-color: $light-gray;
            &::placeholder{
                color: $gray;
            }
        }
        .input-group{
            input{
                border-right: none;
            }
            span{
                position: relative;
                background-color: $light-gray;
                cursor: pointer;
                .rubrica.show{
                    display: block;
                }
                .rubrica{
                    display: none;
                    text-align: start;
                    background-color: $light-gray;
                    width: 150px;
                    height: fit-content;
                    position: absolute;
                    bottom: -100px;
                    left: -50px;
                    &>div{
                        padding: 5px;
                        border: 1px solid $dark-gray;
                        &:hover{
                            background-color: $gray;
                        }
                    }
                }

            }
        }
        h2{
            color: $green;
        }

    }
}
.left{
    padding: 50px 80px 70px 0;
    font-size: 150%;

}

.right{
    padding: 50px 0px 70px 40px;
}

</style>