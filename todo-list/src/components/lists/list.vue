<template>
    <li class='todo-list'>
        <div class="list">
            <span @click="AciveList(Mode)" class='text'>
                {{DataIndex+1}}. {{list.desc}}
            </span>
            <div class="btns">
                <span class="btn red" @click="DeleteList(DataIndex)">삭제</span>
            </div>
        </div>

        <div class='desc' :class="{active:Mode}">
            <p>
                {{list.desc}}
            </p>
            <div class="add">
                <span class='text'>{{list.date}}</span>

            </div>
        </div>
    </li>
</template>
<script>
export default {
    props:['list','DataIndex'],
    data() {
        return {
            Mode:false
        }
    },
    methods: {
        AciveList(Mode){
            this.Mode = Mode?false:true
        },
        DeleteList(index){
            console.log(
                this.$store.state.TodoList[index]
            )
            this.$store.state.TodoList.splice(index,1)
        }
    },
}
</script>

<style lang="scss">
        li.todo-list{
            div.list{
                margin: 10px 0px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #d0d0d0;
                padding: 15px 0px;
                input{
                    // flex: 1;
                    width: 15px;
                    height: 15px;
                    outline: none;
                }
                span{
                    flex: 9;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin: 0px 15px;
                    cursor: pointer;
                    text-align: left;
                    &:hover{
                        color: royalblue;
                    }
                }
                .btn{
                    cursor: pointer;
                    margin-left: 15px;
                    padding: 2px 5px;
                    background: royalblue;
                    border-radius: 3px;
                    color: #fff;
                    font-size: 0.875rem;
                    &.red{
                        background: tomato;
                    }
                }
            }
            div.desc{
                padding: 10px;
                text-align: left;
                display: none;
                &.active{
                    display: block;
                }
                p{
                    padding: 10px;
                    margin-bottom: 20px;
                    line-height: 1.5rem;
                    background: lightgray;
                }
                div.add{
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    span{
                        font-size: 12px;
                    }
                }
            }
        }
    
</style>