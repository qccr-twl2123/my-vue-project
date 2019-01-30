<template>
  <div id="myApp">
    <h3>游戏列表</h3>
    <!-- Virtual DOM -->
    <div v-if="seen">2017最新发卖</div>
    <ol>
      <li v-for="game in games">{{game.title}} / {{game.price}}元</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Games',
  data () {
    return {
      seen: true,
      games: [
        {
          title: '勇者斗恶龙',
          price: 400
        },
        {
          title: '超级马里奥',
          price: 380
        },
        {
          title: '我的世界',
          price: 99
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
