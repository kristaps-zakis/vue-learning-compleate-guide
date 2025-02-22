<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
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
        id: {
            type: String, 
            required: true
        },
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
    emits: [
        'toggle-favorite'
    ],
    // emits: {
    //     'toggle-favorite': function(id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn("Id is missing");
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetailsVisibility () {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleIsFavorite () {
            // this.friendIsFavorite = !this.friendIsFavorite;
            this.$emit("toggle-favorite", this.id);
        },
    }
}
</script>