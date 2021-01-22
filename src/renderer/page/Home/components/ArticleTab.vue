<template>
  <!-- <div style="margin-bottom: 20px;">
    <el-button size="small" @click="addTab(editableTabsValue)">
      add tab
    </el-button>
  </div> -->
  {{ tabFiles }}
  <el-tabs v-model="editableTabsValue" type="card" closable class="reset-tabs" @tab-remove="removeTab">
    <el-tab-pane v-for="item in tabFiles" :key="item._id" :label="item.title" :name="item.title">
      <Editor />
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
    const state = reactive({
      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
      tabIndex: 2,
    });

    const store = useStore();

    onMounted(() => {
      console.log(state);
    });

    const addTab = (targetName) => {
      let newTabName = ++state.tabIndex + '';
      state.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
      });
      state.editableTabsValue = newTabName;
    };

    const removeTab = (targetName) => {
      let tabs = state.editableTabs;
      let activeName = state.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      state.editableTabsValue = activeName;
      state.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    };
    return { ...toRefs(state), tabFiles: computed(() => store.getters.tabFiles), addTab, removeTab };
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