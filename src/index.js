import LzSwitch from './packages/switch/index';
import LzWigetIp from './packages/wiget-ip/index';


import './common/style/reset.css'

const components = [
    LzSwitch,
    LzWigetIp
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  LzSwitch,
  LzWigetIp
}
