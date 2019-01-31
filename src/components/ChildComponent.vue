<template>
  <div>
    <b>子组件：</b><button @click="handleIncrease">传递数值给父组件</button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  methods: {
    handleIncrease () {
      this.$emit('increase',5)
    }
  }
}
</script>

<style scoped>

</style>
