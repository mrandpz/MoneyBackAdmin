<template>
  <el-tabs v-model="editableTabsValue" type="card" closable class="reset-tabs" @tab-remove="removeTab">
    <el-tab-pane v-for="item in tabFiles" :key="item._id" :label="item.title" :name="item._id">
      <Editor :initContent="item.content" />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { reactive, toRefs, computed, onMounted } from 'vue';
import Editor from './Editor.vue';
import { useStore } from 'vuex';
export default {
  components: {
    Editor,
  },
  setup() {
    const tabFiles = computed(() => store.getters.tabFiles);

    const state = reactive({
      editableTabsValue: '',
    });
    const store = useStore();

    state.editableTabsValue = tabFiles?.value?.[0]?._id;
    const removeTab = (targetName) => {
      let tabs = tabFiles.value;
      let activeName = state.editableTabsValue;
      // 如果删除的正好是高亮的tab
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab._id === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab._id;
            }
          }
        });
      }
      state.editableTabsValue = activeName;
      store.commit('deleteTbaById', targetName);
    };
    return { ...toRefs(state), tabFiles, removeTab };
  },
};
</script>
<style lang="less" scoped>
@import '../../../styles/index.less';
.reset-tabs {
  margin-left: -2px;
  margin-top: -1px;
}
</style>