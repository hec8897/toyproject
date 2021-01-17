<template>
<div id="app">

  <div class="home wrap">

    <div class="tits">
      <img class='logo' alt="Vue logo" src="@/assets/logo.png">
      <h1>Vue Todo-list</h1>
    </div>

    <Inputs class='inputs'/>

    <ListView class='lists'/>

  </div>
</div>
</template>

<script>
import Inputs from '@/components/Inputs.vue'
import ListView from '@/components/ListView.vue'

export default {
  name: 'Home',
  components: {
    Inputs,ListView
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  width: 100%;
  div.wrap{
    max-width: 375px;
    margin: 0 auto;
  }
}
div.home{
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  div.tits{
    flex: 1;
    img.logo{
      width: 40%;
    }
    h1{
      font-size: 2rem;
      font-weight: bold;
      margin: 30px 0px;
    }
  }
  div.inputs{
    margin: 10px 0px;
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  div.lists{
    width: 100%;
    flex: 8;
  }
}
  
</style>