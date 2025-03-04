<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'

// console.log(mapGetters(['finalCounter']))

export default {
  computed: {
   
    ...mapGetters('numbers', ['finalCounter']),
     // ...mapGetters(['finalCounter']),
    // count() {
    //   // return this.$store.state.count

    //   return this.$store.getters.finalCounter
    // },
  },
}
</script>
