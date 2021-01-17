<template>
    <div>
      <input type="text" placeholder="todo.." v-model="Inputs">
      <div class="btn shadow" @click="addList">Add+</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      Inputs:""
    }
  },
  methods: {
    addList(){
      if(this.Inputs == ""){
        alert('Please Enter letters')
      }
      else{
        let Inputs = {
            desc:this.Inputs,
            date:'2021-01-17'
          }
          this.$store.commit('AddList',Inputs);
          this.Inputs = ""
        }
    }
  }
}
</script>

<style lang="scss">
  div.inputs{
  input{
    width: 75%;
    border: 1px solid #d0d0d0;
    outline: none;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px;
    }
    div.btn{
      box-sizing: border-box;
      padding: 10px;
      width: 23%;
      background-color: #4CAF50;
      border-radius: 3px;
      cursor: pointer;
      color: #fff;
    }
  }
    
</style>