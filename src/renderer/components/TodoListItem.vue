<!-- `checked` 为 true 或 false -->
<template>
  <div class="todolist-container">
    <div v-for="item in todolist" :key="item._id">
      <el-checkbox v-model="item.not" @change="handleCheck(item._id)">{{ item.title }}</el-checkbox>
    </div>
    <div class="reset-append">
      <el-input placeholder="请输入内容" v-model="addTodo">
        <template #append>
          <div class="append" @click="addTodoFn">新增</div>
        </template>
      </el-input>
    </div>
  </div>
  
</template>

<script>
import { onMounted, ref } from 'vue';
import {searchTodoList,addTodo,updateTodo} from '../utils/commonApi';
export default {
  data() {
    return {
      todolist: [],
      addTodo:''
    };
  },
  mounted() {
    this.getList();
  },
  methods:{
    getList(){
      searchTodoList().then((res) => {
        this.todolist = res;
      });
    },
    addTodoFn(){
      if(!this.addTodo){
        return;
      }
      addTodo({title:this.addTodo}).then((res) => {
        if(res){
          this.addTodo = '';
          this.getList();
        }
      });
    },
    handleCheck(value){
      updateTodo({_id:value}).then((res) => {
        if(res){
          this.getList();
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.todolist-container {
  padding: 10px;
}

.reset-append{
  margin-top: 15px;
  .append{
    cursor: pointer;
  }
}
</style>