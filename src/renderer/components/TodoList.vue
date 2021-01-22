<template>
  <div class="fix-element">
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px"> TODOLIST </el-button>
  </div>
  <el-drawer class="reset-drawer" title="TODOList" v-model:visible="drawer">
    <TodoListItem />
  </el-drawer>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  components: {
    TodoListItem,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style lang="less" scoped>
@import '../styles/index.less';
.fix-element {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 50px;
  z-index: 998;
  cursor: pointer;
  .center();
}
.reset-drawer {
  z-index: 10002 !important;
}
</style>