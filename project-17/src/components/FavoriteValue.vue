<template>
  <h3>{{ count }}</h3>
  <p>We do more ...</p>
</template>

<script>
export default {
  computed: {
    count() {
      // return this.$store.getters.normalizeCounter
      return this.$store.getters['numbers/normalizeCounter'] //normalizeCounter
    },
  },
}
</script>
