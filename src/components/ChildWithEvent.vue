<template>
  <div><button v-on:click="add">子组件加吧</button></div>
</template>

<script>
    export default {
        name: "ChildWithEvent",
        props: ['a','b'],
        methods:{
          add: function () {
            this.$emit('add_event', this.a + this.b);
          }
        }
    }
</script>

<style scoped>

</style>
