<template>
<!-- https://element.eleme.cn/#/zh-CN/component/layout -->
<div id="Manager">
  <el-row class="tac" :gutter="20" >
    <el-col :span="4">
      <h5>管理</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>卡牌</span>
          </template>
          <el-menu-item index="CardCreate" @click="handleSelect">创建卡牌</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="2" style="min-height: 1px;">
    </el-col>
    <el-col :span="12">
      <CardCreate v-if="index === 'CardCreate'"></CardCreate>
    </el-col>
  </el-row>

</div>
</template>
<script>
  import CardCreate from './cards/CardCreate'
  export default {
    components:{
      CardCreate
    },
    data() {
      return {
        index: ''
      }
    },
    name: "Manager",
    methods: {
      handleSelect(e){
        console.log(e.index);
        this.index = e.index
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.tac{
  margin-right: 0px !important;
}
/* #Manager{
  padding-top: 60px;
} */
</style>
