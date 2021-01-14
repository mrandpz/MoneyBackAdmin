<template>
  <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<style lang="less">
@import './index.less';

body{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.miniScroll {
  .reset-scroll-mixin()
}
</style>
