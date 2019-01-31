<template>
  <div>
    传递数值给父组件:
    <h1>父组件</h1>
    <p>数值：{{total}}</p>
    <ChildComponent @increase="getTotal"></ChildComponent>

    <br/>
    <br/>
    父组件监听子组件的事件:
    <ChildWithEvent :a='1' :b='2' v-on:add_event='getAddResult'></ChildWithEvent>
    计算结果:{{result}}
    <br/>
    <br/>
    父组件传递参数给子组件:
    <say-to pname='西游记'>龙马,孙悟空</say-to>
  </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent';
import ChildWithEvent from '@/components/ChildWithEvent';
import SayTo from '@/components/SayTo';
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
      ChildWithEvent,
      SayTo
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
