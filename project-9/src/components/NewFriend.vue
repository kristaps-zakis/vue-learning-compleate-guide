<template>    
    <form @submit.prevent="submitForm">
        <h2>New Friend</h2>
        <button @click.prevent="showForm">Show form</button>
        <div v-if="formVisible">
            <div>
                <label for="new-name">Name</label>
                <input name="name" id="new-name" type="text" placeholder="name" v-model="enteredName" />
            </div>

            <div>
                <label for="new-phone">Phone</label>
                <input name="phone" id="new-phone" type="text" placeholder="Phone" v-model="enteredPhone" />
            </div>
            
            <div>
                <label for="new-email">Email</label>
                <input name="email" id="new-email" type="text" placeholder="E-mail" v-model="enteredEmail" />
            </div>

            <div>
                <input type="checkbox" v-model="isFavorite" name="favorite" id="is-favorite" />
                <label for="is-favorite">Is Favorite</label>
            </div>

            <div>
                <button>Add new Friend</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-friend'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
            isFavorite: false,
            formVisible: false,
        }
    },
    methods: {
        submitForm() {
            console.log("Form Submitter");
            this.$emit(
                'add-friend',
                this.enteredName,
                this.enteredPhone,
                this.enteredEmail,
                this.isFavorite
            )
        },
        showForm() {
            console.log("Toggle Form visibility");
            this.formVisible = !this.formVisible;
        }
    }
}
</script>