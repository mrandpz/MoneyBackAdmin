/*
 * @Author: Mr.pz
 * @Date: 2021-01-22 13:28:05
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-25 21:24:32
 * files 数据设计
 * files 为完整的数据结构如：
 * [{
 *  id:1,
 *  title:2,
 *  content:3
 * }]
 *  siderIds=[1,2]  为左侧菜单搜索结果的id，显示由getters 计算生成
 *  tabIds=[1] 为打开的tabid， 显示由getters 计算生成
 *  unsaveids 对应的编辑中的未保存状态，
 */

import { createStore } from 'vuex';
import { useElectron } from '@/use/electron';
import { FILES } from './KEYS';

type ID = string | number;
type TITLE = string;
type CONTENT = string;

export interface FileJSON {
  _id: ID;
  title: TITLE;
  content: CONTENT;
}

interface IState {
  files: FileJSON[];
  siderIds: ID[];
  tabIds: ID[];
  unsaveIds: ID[];
}

function findByIncludeId(files: FileJSON[], ids: ID[]) {
  return files
    .map((it) => {
      if (ids.includes(it._id)) {
        return it;
      }
    })
    .filter((it) => it);
}

const { getStore, setStore } = useElectron();

export default createStore<IState>({
  state() {
    return {
      files: getStore(FILES) || [],
      siderIds: [],
      tabIds: ['x', 'a'],
      unsaveIds: [],
    };
  },
  getters: {
    siderFiles(state) {
      const { siderIds, files } = state;
      if (siderIds.length) {
        return findByIncludeId(files, siderIds);
      }
      return files;
    },
    tabFiles(state) {
      const { tabIds, files } = state;
      return findByIncludeId(files, tabIds);
    },
    unsaveFiles(state) {
      const { unsaveIds, files } = state;
      return findByIncludeId(files, unsaveIds);
    },
  },
  mutations: {
    addFile(state, payload) {
      state.files.push(payload);
      console.log(state);
    },
    //  todo：用actions
    deleteById(state, payload) {
      state.files = state.files.filter((it) => it._id !== payload);
    },
    deleteTbaById(state, payload) {
      state.tabIds = state.tabIds.filter((it) => it !== payload);
    },
  },
  // state() {
  //   return {
  //     count: 0,
  //     forMapState1: 1,
  //     forMapState2: 2,
  //   };
  // },
  // getters: {
  //   getters1(state) {
  //     // 处理一些计算属性
  //     return 'getter' + state.count;
  //   },
  // },
  // mutations: {
  //   increment(state) {
  //     state.count++;
  //   },
  // },
  // // 跟mutations 很像，但是可以发起异步
  // actions: {
  //   increment(context) {
  //     context.commit('increment');
  //   },
  // },
  // actions: {
  //   async actionA ({ commit }) {
  //     commit('gotData', await getData())
  //   },
  //   async actionB ({ dispatch, commit }) {
  //     await dispatch('actionA') // wait for `actionA` to finish
  //     commit('gotOtherData', await getOtherData())
  //   }
  // }
});
