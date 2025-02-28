<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['finalCounter']),
    // count() {
    //   // return this.$store.state.count

    //   return this.$store.getters.finalCounter
    // },
  },
}
</script>
