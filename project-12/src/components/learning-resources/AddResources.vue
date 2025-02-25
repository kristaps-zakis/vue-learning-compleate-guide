<template>
    <base-card>   
        <h2>Add resources</h2>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" placeholder="Title" ref="titleInput" />
            </div>

            <div class="form-control">
                <label for="description">Description</label>
                <!-- <input id="description" name="description" type="text" placeholder="Description" v-model="description" />   -->
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
  methods: {
    submitData() {
        const title = this.$refs.titleInput.value;
        const description = this.$refs.descInput.value;
        const link = this.$refs.linkInput.value;
        // this.$emit('add-resource', this.title, this.description, this.link)  
        this.addResources(title, description, link);
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