<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately, at least one input value is invalid</p>
            <p>Please check all inputs</p>
        </template>
        <template v-slot:actions>
            <base-button @click="confirmError">Ok</base-button>
        </template>
    </base-dialog>
    
    <base-card>   
        <h2>Add resources</h2>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" placeholder="Title" ref="titleInput" />
            </div>

            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" placeholder="Description" ref="descInput"></textarea>  
            </div>
            
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="text" placeholder="Link" ref="linkInput" />
            </div>

            <div>
                <base-button type="submit">Add resource</base-button>
            </div>
            
        </form>
    </base-card>
 
</template>
<script>

export default {
  inject: ['addResources'],
  data() {
    return {
        inputIsInvalid: false
    }  
  },
  methods: {
    submitData() {
        const title = this.$refs.titleInput.value;
        const description = this.$refs.descInput.value;
        const link = this.$refs.linkInput.value;

        if (
            title.trim() === '' || description.trim() === '' || link.trim() === ''
        ) {
            this.inputIsInvalid = true;
            return;
        }
        // this.$emit('add-resource', this.title, this.description, this.link)  
        this.addResources(title, description, link);
    },
    confirmError() {
        this.inputIsInvalid = false;
    }
  }
    
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>