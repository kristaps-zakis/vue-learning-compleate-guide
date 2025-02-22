<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : "" }}</h2>
        <button @click="toggleIsFavorite" >Favorite</button>
        <button @click="toggleDetailsVisibility">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    // props: [
    //     'name',
    //     'phoneNumber',
    //     'emailAddress'
    // ],

    props: {
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: String,
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function (value) {
            //     return value === "1" || value === "0";
            // }
        }
    },
    data() {
        return {
            detailsAreVisible: false,
            friendIsFavorite: this.isFavorite,
        };
    },
    methods: {
        toggleDetailsVisibility () {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleIsFavorite () {
            this.friendIsFavorite = !this.friendIsFavorite;
        },
    }
}
</script>