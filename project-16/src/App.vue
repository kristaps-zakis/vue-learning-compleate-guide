<template>
  <div class="container">
    <div class="block" :class="{ animate: animateBlock }"></div>
    <button @click="animateBlockMethod">Animate</button>
  </div>
  <div class="container">
    <!-- name="fade-button" mode="out-in" -->
    <transition name="para" enter-to-class="para--enter-to" enter-active-class="para--enter-active">
      <p v-if="paragraphIsVisible">This paragraph is only sometimes visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle paragraph</button>
  </div>
  <!-- <transition name="modal" > -->
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  <!-- </transition> -->
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animateBlock: false,
      dialogIsVisible: false,
      paragraphIsVisible: false,
    }
  },
  methods: {
    animateBlockMethod() {
      this.animateBlock = !this.animateBlock
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible
    },
    showDialog() {
      this.dialogIsVisible = true
    },
    hideDialog() {
      this.dialogIsVisible = false
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform cubic-bezier(0.39, 0.575, 0.565, 1) .3s; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-in-out forwards;
}

.v-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}
.v-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: slide-fade 0.3s ease-in-out;
}
.v-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.para--enter-from {
  opacity: 0;
}
/* .v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-in;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .modal-enter-from {
  opacity: 0;
  transform: translateY(-50px) scale(0.9);
} */
.modal-enter-active {
  transition: all 0.3s ease-out;
  animation: modal 0.3s ease-out; 
   /* duration timing-function delay iteration-count direction fill-mode; */

}
/* .modal-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
} */


@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
