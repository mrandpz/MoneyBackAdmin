<template>
  <div>
    这是一个slot的{{count}}探索组件{{someProps}}
    <slot name="suffix"></slot>
    <div class="append" @click="handleClick" v-if="$slots.append">
        <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRef,computed } from "vue";
import { useStore } from 'vuex';

export default defineComponent({
  name:'TestSlot',
  props:{
    someProps:{
      type:String,
      default:'xx'
    }
  },
  emits:['appendClick'],
  setup(props,ctx){
    const store = useStore()
    
    const state = reactive({
      someVisible:false
    });
    
    const handleClick = ()=>{
      ctx.emit('appendClick')
      console.log('handleClick')
    };

    return {
      count: computed(() => store.state.count),
      someVisible: toRef(state,'someVisible'),
      handleClick
    };
  }
});
</script>

<style>

</style>