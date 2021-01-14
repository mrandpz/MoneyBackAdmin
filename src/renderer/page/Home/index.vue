<template>
  <el-container>
    <el-aside
      class="miniScroll"
    >
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="3">
          <template #title>
            <i class="el-icon-setting" />导航三
          </template>
          <el-menu-item-group>
            <template #title>
              分组一
            </template>
            <el-menu-item index="3-1">
              选项1
            </el-menu-item>
            <el-menu-item index="3-2">
              选项2
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">
              选项3
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template #title>
              选项4
            </template>
            <el-menu-item index="3-4-1">
              选项4-1
            </el-menu-item>
          </el-submenu>
        </el-submenu>
         <el-submenu index="2">
          <template #title>
            <i class="el-icon-setting" />导航三
          </template>
          <el-menu-item-group>
            <template #title>
              分组一
            </template>
            <el-menu-item index="3-1">
              选项1
            </el-menu-item>
            <el-menu-item index="3-2">
              选项2
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">
              选项3
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template #title>
              选项4
            </template>
            <el-menu-item index="3-4-1">
              选项4-1
            </el-menu-item>
          </el-submenu>
           <el-submenu index="1">
          <template #title>
            <i class="el-icon-setting" />导航三
          </template>
          <el-menu-item-group>
            <template #title>
              分组一
            </template>
            <el-menu-item index="3-1">
              选项1
            </el-menu-item>
            <el-menu-item index="3-2">
              选项2
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">
              选项3
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template #title>
              选项4
            </template>
            <el-menu-item index="3-4-1">
              选项4-1
            </el-menu-item>
          </el-submenu>
        </el-submenu>
         <el-submenu index="3">
          <template #title>
            <i class="el-icon-setting" />导航三
          </template>
          <el-menu-item-group>
            <template #title>
              分组一
            </template>
            <el-menu-item index="3-1">
              选项1
            </el-menu-item>
            <el-menu-item index="3-2">
              选项2
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">
              选项3
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template #title>
              选项4
            </template>
            <el-menu-item index="3-4-1">
              选项4-1
            </el-menu-item>
          </el-submenu>
        </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-header>
      <ArticleTab />
    </el-header>
    <el-container class="container">
      <el-main class="miniScroll">
        <div>富文本编辑器</div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import ArticleTab from './components/ArticleTab.vue';
  export default {
    components:{
      ArticleTab,
    },
    data() {
      return {};
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
    z-index: 9998;
    padding-left: @siderWidth;
    display: flex;
    border-top:1px solid @lineColor
  }
  .container{
    margin-left: 250px;
    box-sizing: border-box;
  }
  .el-main{
    margin-top: @headerHeight;
    height: calc(100vh - @headerHeight);
  }
  .el-aside {
    color: #333;
    position: fixed;
    z-index: 9999;
    height: 100%;
    left: 0;
    background: #fff;
    width: 250px!important;
  }
  .el-menu{
    height: 100%;
  }
</style>