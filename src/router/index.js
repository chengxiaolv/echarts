import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import common_assemblys_example from '@/common_assemblys_example/common_assemblys_example' //组件实列文件集合。

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'common_assemblys_example',
        component: common_assemblys_example
    }, {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    }, { // 组件的示例页面。
        path: '/common_assemblys_example',
        name: 'common_assemblys_example',
        component: common_assemblys_example
    }]
})