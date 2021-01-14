<template>
  <ul class="list-container">
    <li class="list">
      <div v-show="!isInputActive" class="resetInput" @click="changeIsInputActive(true)">{{ inputValue }}</div>
      <input
        ref="inputRef"
        v-show="isInputActive"
        v-model="inputValue"
        @blur="changeIsInputActive(false)"
        class="resetInput"
      />
      <i
        class="el-icon-delete deleteArcticle"
        :class="{ deleteForInputColor: isInputActive }"
        @click="deleteArcticle"
      ></i>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      inputValue: '2',
      isInputActive: false,
    };
  },
  methods: {
    changeIsInputActive(isActive) {
      this.isInputActive = isActive;
      if (isActive) {
        this.$nextTick(function () {
          this.$refs.inputRef.focus();
        });
      }
    },
    deleteArcticle() {
      console.log('delete arcticle');
    },
  },
};
</script>
<style lang="less" scoped>
@import '../../../index.less';
.list-container {
  margin: 0;
  padding: 0;
  .list {
    list-style: none;
    display: flex;
    &:hover {
      background: @activeBgColor;
    }
    .deleteArcticle {
      display: flex;
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