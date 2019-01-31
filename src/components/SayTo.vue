<template>
  <div>
    游戏名称:{{pname}}:<slot></slot>
  </div>
</template>

<script>
    export default {
        name: "SayTo",
        props: ['pname']
    }
</script>

<style scoped>

</style>
