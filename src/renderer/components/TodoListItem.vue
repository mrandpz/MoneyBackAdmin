<!-- `checked` 为 true 或 false -->
<template>
  <div class="todolist-container">
    <div v-for="item in todolist" :key="item._id">
      <el-checkbox v-model="item.not">{{ item.title }}</el-checkbox>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import request,{abort} from '../utils/request';
export default {
  setup() {
    const checked = ref(true);
    return { checked };
  },
  data() {
    return {
      todolist: [],
    };
  },
  mounted() {
    request({url:'/todolist/search'}).then((res) => {
      this.todolist = res;
    });
  },
};
</script>

<style lang="less" scoped>
.todolist-container {
  padding: 10px;
}
</style>