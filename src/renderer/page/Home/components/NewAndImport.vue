<template>
  <el-row class="newimport-container">
    <el-col :span="12"><el-button type="primary">新建</el-button></el-col>
    <el-col :span="12"><el-button type="success">导入</el-button></el-col>
  </el-row>
</template>
<style lang="less" scoped>
.newimport-container {
  position: absolute;
  bottom: 0;
  padding-bottom: 30px;
  left: 0;
  width: 100%;
  text-align: center;
  background: #fff;
}
</style>