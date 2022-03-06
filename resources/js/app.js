import { createApp } from "vue";

const app=createApp({
    data(){
        return{
            count:0
        }
    },
    methods:{
        increment(){
            this.count++;
        }
    }
})

app.mount("#app");

