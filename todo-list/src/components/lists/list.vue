<template>
    <li class='todo-list'>
        <div class="list">
            <input type="checkbox" name="" id="">
            <span @click="AciveList(Mode)">
                {{list.desc}}
            </span>
        </div>

        <div class='desc' :class="{active:Mode}">
            <p>
                {{list.desc}}
            </p>
            <div class="add">
                <span>{{list.date}}</span>
                <div class="btns">
                    <span class="btn">삭제</span>
                    <span class="btn">수정</span>
                </div>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    props:['list'],
    data() {
        return {
            Mode:false
        }
    },
    methods: {
        AciveList(Mode){
            this.Mode = Mode?false:true
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
                    &:hover{
                        color: royalblue;
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
                    margin-bottom: 20px;
                    line-height: 1.5rem;
                }
                div.add{
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    span{
                        font-size: 12px;
                    }
                    .btn{
                        margin-left: 15px;
                        padding: 5px 10px;
                        background: lightblue;
                        border-radius: 3px;
                    }
                }
            }
        }
    
</style>