<template>
<!-- https://element.eleme.cn/#/zh-CN/component/layout -->
<div id="Manager">
  <el-row class="tac" :gutter="20" >
    <el-col :span="4">
      <h5>管理</h5>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>创建</span>
          </template>
          <el-menu-item index="CardCreate" @click="handleSelect">创建卡牌</el-menu-item>
          <el-menu-item index="EnvoyCreate" @click="handleSelect">创建棋子</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>查看</span>
          </template>
          <el-menu-item index="CardList" @click="handleSelect">所有卡牌</el-menu-item>
          <el-menu-item index="EnvoyList" @click="handleSelect">所有棋子</el-menu-item>
        </el-submenu>
        <!-- <el-menu-item index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>查看</span>
          </template>
          <el-menu-item index="CardAll" @click="handleSelect">所有卡牌</el-menu-item>
          <el-menu-item index="EnvoyAll" @click="handleSelect">所有棋子</el-menu-item>

        </el-menu-item> -->
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
      <EnvoyCreate v-if="index === 'EnvoyCreate'"></EnvoyCreate>
      <EnvoyList v-if="index === 'EnvoyList'"></EnvoyList>

    </el-col>
  </el-row>

</div>
</template>
<script>
  import CardCreate from './cards/CardCreate'
  import EnvoyCreate from './envoys/EnvoyCreate'
  import EnvoyList from './envoys/EnvoyList'

  export default {
    components:{
      CardCreate,
      EnvoyCreate,
      EnvoyList
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
