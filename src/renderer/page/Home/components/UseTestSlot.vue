<template>
   <TestSlot @appendClick="appendClick" someProps="someProps">
        <!-- <template v-slot:suffix>
          <div>普通传递：suffix</div>
        </template> -->
        <template v-slot:append>
          <div>普通传递：append</div>
        </template>
      </TestSlot>
</template>

<script lang="ts">
/*
 * @Author: Mr.pz 
 * @Date: 2021-01-21 14:04:40 
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-21 14:05:03
 * 一个试炼场
 */
import Vue from 'vue';
import TestSlot from './TestSlot.vue';
export default {
  components: {
    TestSlot
  },
  data() {
    return {
      someProps:'xx'
    };
  },
  methods:{
    appendClick(){
      console.log('appendClick')
    }
  }
}
</script>