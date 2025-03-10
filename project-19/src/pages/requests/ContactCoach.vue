<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" v-model.trim="email" @blur="validateEmail" />
      <p v-if="emailIsInvalid">Please enter a valid email address</p>
    </div>  
    <div class="form-control">
      <label for="message">Message</label>
      <textarea id="message" v-model.trim="message" @blur="validateMessage"></textarea>
      <p v-if="messageIsInvalid">Please enter a valid email address</p>
    </div>  
    <div class="form-actions">
      <button type="submit">Send Message</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      emailIsInvalid: false,
      message: '',
      messageIsInvalid: false,
      formIsValid: true
    }
  },
  methods: {
    validateEmail() {
      if (this.email.trim() === '' || !this.email.includes('@')) {
        this.emailIsInvalid = true;
      } else {
        this.emailIsInvalid = false;
      }
    },
    validateMessage() {
      if (this.message.trim() === '') {
        this.messageIsInvalid = true;
      } else {
        this.messageIsInvalid = false;
      }
    },
    submitForm () {
      this.formIsValid = true;

      this.validateEmail();
      this.validateMessage();

      // if (!this.emailIsInvalid && !this.messageIsInvalid) {
      //   console.log('Form submitted');
      // }

      console.log("send message")

      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id
      });

      this.$router.replace('/coaches');
    }
  }
}
</script>

<style scoped>
  form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>