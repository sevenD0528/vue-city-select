import city from '../city/city.vue'

// city_selection_plug.js
const plug = {
  install (Vue, options) {
    Vue.component(city.name, city)
  }
}
// 导出这个对象
export default plug
