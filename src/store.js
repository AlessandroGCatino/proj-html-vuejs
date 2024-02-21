import { reactive } from "vue"

export const store = reactive({
    selected : 0,
    testimonials:[
        {
            image: "src/assets/img/testimonial-grant.png",
            quote:"Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
            name:"Grant Wishes"
        },
        {
            image: "src/assets/img/testimonial-harold.png",
            quote:"Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
            name:"Harold Mannings"
        },
        {
            image: "src/assets/img/testimonial-kate.png",
            quote:"Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
            name:"Kate Cunningam"
        },
        {
            image: "src/assets/img/testimonial-kelly.png",
            quote:"Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
            name:"Kelly Kapour"
        },
        {
            image: "src/assets/img/testimonial-sophia.png",
            quote:"Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
            name:"Sophia Sugarcane"
        }
    ]
})