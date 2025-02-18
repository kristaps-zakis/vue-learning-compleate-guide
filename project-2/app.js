const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Learn Vue from srcatch!',
            courseGoalB: 'Build something awesome!',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');