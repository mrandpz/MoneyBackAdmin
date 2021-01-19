### ref
和react 的ref一样，可以当做基本数据，也可以获取dom的挂在
```js
<div ref='editor'></div>
export default {
    name: 'app',
    setup() {
       const editor = ref(); // editor 对应名称
    }
```
### setup
- 使用Composition API 的入口
- 在beforeCreate之前调用
- 在setup中没有this
- 返回对象中的属性刻在模板中使用

 onMounted, onBeforeUnmount等生命周期可以在此使用
 ```js
 <template>
    <div ref='editor'></div>
    <button @click='syncHTML'>同步内容</button>
    <div :innerHTML='content.html'></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue';
import WangEditor from 'wangeditor';

export default {
    name: 'app',
    setup() {
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
};
</script>

 ```
### reactive 和 ref
reactive只能 是**对象**，并且数据不能是只读
```js
<template>
  <div>
    <p>{{ user }}</p>
    <button @click="increase">click me! one year later</button>
  </div>
</template>
 
<script>
import { reactive } from "vue";
export default {
  name: "reactive",
  setup() {
    const user = reactive({ name: "Alice", age: 12 });
    function increase() {
      ++user.age
    }
    return { user, increase };
  },
};

```
### onMounted 等