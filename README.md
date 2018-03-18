# cityselectdemo

> A city selection component built on Vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

> The city selection component is desigined as a vue plugin for solving the problems like selecting cities of submit forms.

The repo is based on vue-cli + axios + elementUI

and the component can be used like :

        import citySelection from './components/plugin/city_selection_plug.js'
        Vue.use(citySelection)

the plugin is packaged as below :

        import city from '../city/city.vue'

        // city_selection_plug.js
        const plug = {
          install (Vue, options) {
            Vue.component(city.name, city)
          }
        }
        // export the plug
        export default plug

And the view is like:

![](./static/images/demo2.png)

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
