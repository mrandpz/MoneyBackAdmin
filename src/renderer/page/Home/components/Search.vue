<template>
  <el-input v-model="input" placeholder="请输入内容" clearable maxlength="20" />
</template>

<script >
import { ref } from 'vue';
export default {
  setup() {
    const input = ref('');

    return { input };
  },
};
</script>
<style lang="less">
</style>