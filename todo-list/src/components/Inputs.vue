<template>
    <div>
      <input type="text" placeholder="todo..">
      <div class="btn">Add+</div>
    </div>
</template>

<style lang="scss">
  div.inputs{
  input{
    width: 75%;
    height: 100%;
    border: 1px solid #d0d0d0;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
    }
    div.btn{
      width: 23%;
      height: 100%;
      line-height: 40px;
      background-color: #4CAF50;
      border-radius: 3px;
      cursor: pointer;
      color: #fff;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.19);
    }
  }
    
</style>