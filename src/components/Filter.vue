<template>
  <div>
    <p>{{message}}</p>
    <p>{{message | toUpper }}</p>
    <hr>
    <p>现在的vue.js学习进度是{{num}}({{num | toPercentage}})。</p>
  </div>

</template>

<script>
    export default {
        name: "Filter",
        data () {
          return{
              message: 'hello vue.js world.',
              num: 0.3
          }
        },
        filters: {
          toUpper: function(value){
            return value.toUpperCase();
          },
          toPercentage: function(value){
            return value * 100 + '%';
          },
      },
    }
</script>

<style scoped>

</style>
