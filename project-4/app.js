const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    methods: {
        setBoxASelected() {
            this.boxASelected = true;
            this.boxBSelected = false;
            this.boxCSelected = false;
        },
        setBoxBSelected() {
            this.boxASelected = false;
            this.boxBSelected = true;
            this.boxCSelected = false;
        },
        setBoxCSelected() {
            this.boxASelected = false;
            this.boxBSelected = false;
            this.boxCSelected = true;
        }
    }
});

app.mount("#styling")