declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, never>;
  export default component;
}

// declare module 'element3' {
//   export interface Element3 {
//     install: PluginInstallFunction;
//   }
//   export default {} as Element3;
// }
