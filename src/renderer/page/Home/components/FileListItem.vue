<template>
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
</template>
<script>
export default {
  props:{
    data:any
  },
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
  mounted(){
    console.log(this.data)
  }
};
</script>