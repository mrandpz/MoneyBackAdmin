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
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  components: {
    TestSlot
  },
  data() {
    return {
      someProps:'xx'
    };
  },
  computed: {
    ...mapState([
          'forMapState1',
          'forMapState2'
      ]),
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      getters1: 'getters1'
    })
  }, 
  methods:{
    ...mapMutations({
      add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
    }),
    ...mapActions({
      addActions: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    appendClick(){
      console.log('appendClick');
      this.$store.commit('increment');
      console.log(this.$store.state.count);
      console.log(this.forMapState1,this.forMapState2);
      console.log(this.getters1);
      this.add()
      console.log(' 从mutations添加 ',this.$store.state.count);
      this.addActions()
     console.log(' 从actions添加 ',this.$store.state.count);
    }
  }
}
</script>