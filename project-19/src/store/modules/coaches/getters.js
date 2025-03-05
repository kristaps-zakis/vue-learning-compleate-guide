export default {
  coaches(state) {
    return state.couches
  },
  hasCoaches(state) {
    return state.couches && state.couches.length > 0
  },
}
