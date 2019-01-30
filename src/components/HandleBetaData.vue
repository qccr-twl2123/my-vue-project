<template>
  <p>
    今年3月3日发卖的任天堂新一代主机Switch的价格是：{{price}}円，含税价格为：{{priceInTax}}円，折合人民币为：{{priceChinaRMB}}元。
    <br><button @click="addPrice(1000)">加价</button>
  </p>
</template>

<script>
    export default {
        name: 'HandleBetaData',
        data () {
          return {
            price: 1000
            // priceInTax: 0,
            // priceChinaRMB: 0,
          }
        },
        // watch: {
        //   price: function(newVal, oldVal){
        //     console.log(newVal, oldVal);
        //     this.priceInTax = Math.round(this.price * 1.08);
        //     this.priceChinaRMB = Math.round(this.priceInTax / 16.75);
        //   },
        // },
        computed: {
          priceInTax: {
            get:function(){
              return this.price * 1.08;
            },
            set: function(value){
              this.price = value / 1.08;
            }
          },
          priceChinaRMB: function(){
            return Math.round(this.priceInTax / 16.75);
          },
        },
        methods: {
            addPrice: function (value) {
              this.price = this.price+value;
            }

        }
    }
</script>

<style scoped>

</style>
