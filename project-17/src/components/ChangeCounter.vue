<template>
  <button @click="inc">Add 1</button>
  <button @click="by({ value: 10 })">Add 2</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    // addOne() {
    // //   this.$store.commit('addOne')
    //   this.$store.dispatch('increme nt')
    // },
    // ...mapActions(['increment', 'increase'])

    // ...mapActions({
    //   inc: 'increment',
    //   by: 'increase',
    // }),
    ...mapActions('numbers',{
      inc: 'increment',
      by: 'increase',
    }),
  },
}
</script>
