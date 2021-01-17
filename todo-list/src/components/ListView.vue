<template>
    <div class="list">
        <ul>
            <List v-for="(listData,index) in listData" v-bind:key="index" :list='listData'/>
        </ul>
    </div>
</template>
<script>
import List from './lists/list.vue'
export default {
    computed:{
        listData(){
            return this.$store.state.TodoList
        }
    },
    components:{
        List
    }
}
</script>

<style lang="scss">
div.list{
    ul{

    }
}
    
</style>