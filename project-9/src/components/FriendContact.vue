<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetailsVisibility">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                    id: 'manuel',
                    name: "Kristaps Zakis",
                    phone: "asdasd",
                    email: "asd@asd.dd"
                },
        };
    },
    methods: {
        toggleDetailsVisibility () {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
}
</script>