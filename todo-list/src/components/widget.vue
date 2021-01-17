<template>
    <div class="widget" @click="ModeChanger" v-bind:class="[Mode]">
      Dark Mode
    </div>
</template>

<script>
export default {
    computed:{
        Mode(){
            return this.$store.state.Mode
        }
    },
    methods: {
        ModeChanger(){
            const Target = this.$store.state.Mode
            this.$store.state.Mode = this.$store.state.Mode == "light"?"dark":"light"
        }
    },
}
</script>

<style lang="scss">
  div.widget{
    cursor: pointer;
    position: fixed;
    right: 10px;
    bottom: 10px;
    padding: 10px 20px;
    border-radius: 3px;
    &.light{
        background: #424242;
        color: #fff;
    }
    &.dark{
        background: lightgray;
        color: #424242;
    }
  }
</style>