<template>
  <el-container>
    <el-aside class="miniScroll">
      <Search />
      <FileList />
      <NewAndImport />
    </el-aside>
    <el-container class="container">
      <el-main class="miniScroll">
        <ArticleTab />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import ArticleTab from './components/ArticleTab.vue';
import Search from './components/Search.vue';
import FileList from './components/FileList.vue';
import NewAndImport from './components/NewAndImport.vue';
import UseTestSlot from './components/UseTestSlot.vue';
export default {
  components: {
    ArticleTab,
    Search,
    FileList,
    NewAndImport,
  },
};
</script>

<style lang="less" scoped>
@import '../../index.less';
.el-header {
  color: #333;
  // line-height: @headerHeight;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 998;
  padding-left: @siderWidth;
  display: flex;
  border-top: 1px solid @lineColor;
}
.container {
  margin-left: 250px;
  box-sizing: border-box;
}
.el-main {
  height: 100vh;
  padding: 0;
}
.el-aside {
  color: #333;
  position: fixed;
  z-index: 999;
  height: 100%;
  left: 0;
  background: #fff;
  width: 250px !important;
  border-right: 1px solid @lineColor;
}
.el-menu {
  height: 100%;
}
</style>