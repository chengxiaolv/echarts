# cope

> 将中审连的组件集成进来

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

# run unit tests
npm run unit

# run all tests
npm test
```

```
  1.用到的技术
    (1) 技术框架：vue  element-ui  axios 
    (2) css 预编译为  scss

  2.重点文件说明：
    (1) utils中 （都已经在main.js中注册了。） 
       -  axios.js将axios重新封装了 
       -  filters.js里面是全局的过滤器方法
       -  utils.js是全局的注册方法。  
       -  utils_example.vue  详细讲解了 utils中(axios.js filters.js utils.js)的使用方式。
        
    (2) common_assemblys 是所有公共组件的文件夹

    (3) common_assemblys_example 是所有公共组件对应的使用实列方法文件夹
             
    (4) static 下面的  reset.css 是清除一些公共样式  在 index.html中引入了。
```
