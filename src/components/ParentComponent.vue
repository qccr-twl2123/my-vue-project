<template>
  <div>
    <h1>父组件</h1>
    <p>数值：{{total}}</p>
    <ChildComponent @increase="getTotal"></ChildComponent>
    <ChildWithEvent :a='1' :b='2' v-on:add_event='getAddResult'></ChildWithEvent>
    计算结果:{{result}}
  </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent';
import ChildWithEvent from '@/components/ChildWithEvent';
export default {
    name: "ParentComponent",
    data () {
      return {
        total: 10,
        result: 0
      }
    },
    components:{
      ChildComponent,
      ChildWithEvent
    },
    methods: {
      getTotal (count) {
        this.total = count
      },
      getAddResult(pval){
        this.result = pval;
      }
   }
}
</script>

<style scoped>

</style>
