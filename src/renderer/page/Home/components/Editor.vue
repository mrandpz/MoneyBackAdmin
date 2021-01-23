<template>
  <div ref="editor"></div>
  <button @click="syncHTML">同步内容</button>
  <div :innerHTML="content.html"></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, reactive, defineComponent } from 'vue';
import WangEditor from 'wangeditor';

export default defineComponent({
  name: 'Editor',
  props: {
    initContent: {
      type: String,
    }, // Object 修改为 FILEJSON
  },
  setup(props) {
    const editor = ref();
    const content = reactive({
      html: '',
      text: '',
    });

    let instance;
    onMounted(() => {
      instance = new WangEditor(editor.value);
      Object.assign(instance.config, {
        onchange() {
          console.log('change');
        },
      });
      instance.create();
      instance.txt.html(props.initContent);
    });

    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });

    const syncHTML = () => {
      content.html = instance.txt.html();
    };

    return {
      syncHTML,
      editor,
      content,
    };
  },
});
</script>
<style lang="less">
// 因为Modal 的 z-index 只有1002
.w-e-toolbar {
  z-index: 999 !important;
}
.w-e-text-container {
  z-index: 998 !important;
}
</style>