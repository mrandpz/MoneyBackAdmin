<template>
  <ul class="list-container">
    <template v-for="item in siderFiles" :key="item._id">
      <FileListItem data="item"/>
    </template>
  </ul>
  {{initvalue}}
</template>
<script>
import {mapState,mapGetters} from 'vuex';
import FileListItem from './FileListItem.vue';

export default {
  components:{
    FileListItem,
  },
  computed:{
    ...mapGetters([
        'siderFiles',
    ])
  }
};
</script>
<style lang="less">
@import '../../../styles/index.less';
.list-container {
  margin: 0;
  padding: 0;
  .list {
    list-style: none;
    display: flex;
    &:hover {
      background: @activeBgColor;
      .deleteArcticle{
        display: flex;
      }
    }
    .deleteArcticle {
      display: none;
      align-items: center;
      width: 30px;
      cursor: pointer;
    }
    .deleteForInputColor {
      background: #fff;
    }
  }
}
.resetInput {
  padding: 10px;
  height: 20px;
  line-height: 20px;
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #333;
}
</style>