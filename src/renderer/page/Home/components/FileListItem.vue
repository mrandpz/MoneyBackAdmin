<template>
  <li class="list">
    <div v-show="!isInputActive" class="resetInput" @dblclick="changeIsInputActive(true)" @click="open">
      {{ dataSource.title }}
    </div>
    <input
      ref="inputRef"
      v-show="isInputActive"
      v-model="dataSource.title"
      @blur="changeIsInputActive(false)"
      class="resetInput"
    />
    <i
      class="el-icon-delete deleteArcticle"
      :class="{ deleteForInputColor: isInputActive }"
      @click="deleteArcticle(dataSource._id)"
    ></i>
  </li>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    dataSource: Object, // Object 修改为 FILEJSON
  },
  data() {
    return {
      inputValue: '',
      isInputActive: false,
    };
  },
  methods: {
    ...mapMutations({
      deleteById: 'deleteById',
    }),
    changeIsInputActive(isActive) {
      this.isInputActive = isActive;
      if (isActive || this.dataSource.title == '') {
        this.$nextTick(function () {
          this.$refs.inputRef.focus();
        });
      }
    },
    deleteArcticle(id) {
      this.deleteById(id);
    },
    open() {
      // 追加tab
    },
  },
  mounted() {
    this.inputValue = this.dataSource.title;
  },
};
</script>