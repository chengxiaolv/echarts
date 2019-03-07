<template>
<div id="app">
  <router-view/>
</div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  .my-tab-wrapper { // tabBar 公共组件的样式重新。
    .el-tabs__nav {
      z-index: 0;
    }
    .el-tabs__item {
      color: #7B868D;
      background: #fff !important;
      border-radius: 0px;
      height: 30px;
      line-height: 30px;
    }
    .el-tabs__item:hover {
      color: #3BA4EC;
    }
    .el-tabs__item:first-child {
      border-radius: 3px 0 0 3px;
    }
    .el-tabs__item:last-child {
      border-radius: 0 3px 3px 0;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav {
      border: none;
    }
    .el-tabs__item.is-active {
      background: #3BA4EC !important;
      color: #fff;
    }
    .el-tabs--card>.el-tabs__header{
      border: none;
    }
  }

  .list-select-wrapper{ //  listSelect 列表查询搜索框公共样式
    .cling_select_button_csswrapper { 
      display: inline-block;
      vertical-align: bottom;
      margin-left: 4px;
      .el-button{
        height: 30px !important;
        color: #B3B7CB;
        background: #fff;
        border-radius: 0 3px 3px 0;
        border: 1px solid #DEDEDE;
        line-height: 2;
      }
      .el-button:hover {
        color: #6FB5EC !important;
        border: 1px solid #6FB5EC;
      }
      .el-input__icon{
        line-height: 25px;
      }
    }

    .cling_search_input_csswrapper {
      display: inline-block;
      width: 120px;
      .el-input__inner {
        border: 1px solid #DEDEDE;
        background: #fff;
        border-radius: 0px;
        width: 125px;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        color: #434F58;
        text-overflow: clip;
        padding: 0 10px;
        margin-left: -5px;
      }
      .el-input__inner:focus {
        border: 1px solid #6FB5EC;
      }
      .el-input.is-focus .el-input__inner {
        border: 1px solid #6FB5EC;
      }
      .el-input:hover .el-input__inner {
        border: 1px solid #6FB5EC;
      }
    }

    .cling_search_select_csswrapper {
      display: inline-block;
      width: 120px;
      .el-input__inner {
        border: 1px solid #DEDEDE;
        background: #fff;
        border-radius: 3px 0 0 3px;
        width: 120px;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        color: #434F58;
      }
      .el-input__inner:focus {
        border: 1px solid #6FB5EC;
      }
      .el-input.is-focus .el-input__inner {
        border: 1px solid #6FB5EC;
      }
      .el-select:hover .el-input__inner {
        border: 1px solid #6FB5EC;
      }
      .el-input__icon{
        line-height: 25px !important;
      }
    }

    .single_select_csswrapper {
      display: inline-block;
      width: 120px;
      .el-input__inner {
        border: 1px solid #DEDEDE;
        background: #fff;
        border-radius: 2px;
        width: 120px;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        color: #434F58;
      }
      .el-input__inner:focus {
        border: 1px solid #6FB5EC;
      }
      .el-input.is-focus .el-input__inner {
        border: 1px solid #6FB5EC;
      }
      .el-select:hover .el-input__inner {
        border: 1px solid #6FB5EC;
      }
      .el-input__icon{
        line-height: 25px !important;
      }
    }
  }


</style>
