<template>
  <router-view />
  <TodoList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from './components/TodoList.vue';
export default defineComponent({
  components: {
    TodoList,
  },
  name: 'App',
});
</script>

<style lang="less">
@import './styles/index.less';

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.miniScroll {
  .reset-scroll-mixin();
}
</style>
