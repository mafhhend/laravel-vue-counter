import { createApp, ref } from "vue";

const app = createApp({
    setup() {
        let count = ref(0);
        const increment = () => this.count++;
        return {
            count,
            increment,
        };
    },
});

app.mount("#app");
