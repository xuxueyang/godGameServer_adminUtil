<template>
<div id="EnvoyCreate">
<el-form ref="form" :model="form" label-width="80px">
  <p style="margin-bottom:20px;" v-if="form.id">更新棋子</p>
  <p style="margin-bottom:20px;" v-else>创建棋子</p>
  <!-- <el-form-item label="ID" style="display: flex">
    <el-input v-model="form.id"></el-input>
  </el-form-item> -->
  <el-form-item label="名称name" style="display: flex">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="品级grade"   style="display: flex">
    <el-select v-model="form.grade" placeholder="请选择品级">
      <el-option v-for=" tmp in config.Grade" v-bind:key="tmp.value" :label="tmp.label" :value="tmp.value"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="属性attribute"   style="display: flex">
    <el-select v-model="form.attribute" placeholder="请选择属性">
      <el-option v-for=" tmp in config.Attribute" v-bind:key="tmp.value" :label="tmp.label" :value="tmp.value"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="种族race"   style="display: flex">
    <el-select v-model="form.race" placeholder="请选择种族">
      <el-option v-for=" tmp in config.Race" v-bind:key="tmp.value" :label="tmp.label" :value="tmp.value"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="效果">
    <el-checkbox-group v-model="form.effect">
      <el-checkbox v-for=" tmp in config.Effect" v-bind:key="tmp.id" :label="tmp.description + '_' +tmp.id"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="卡牌描述">
    <el-input type="textarea" v-model="form.description"></el-input>
  </el-form-item>
  <el-form-item label="设计备注">
    <el-input type="textarea" v-model="form.designDescription"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>

import itemService from "@/http/itemService.js";
import { async } from 'q';
  export default {
    name: "CardCreate",
    data() {
      return {
        config: {
          Effect: [{
            id: 1,
            description: '抽卡'
          },{
            id: 2,
            description: '成长'
          }]
        },
        form: {
          name: '',
          id: '',
          grade: '',
          race: '',
          cardType: '',
          attribute: '',
          effect: [],
          description: '',
          designDescription: '',
          jsonMap:{

          }
        }
      }
    },
    mounted() {
      this.getItemConfigs()

    },
    methods: {
      getItemConfigs() {
        const _setConfig = this.setConfig
        itemService.getItemConfigs().then(function(res) {
          _setConfig(res)
        })
      },
      setConfig(res){
        this.config = res
      },
      onSubmit() {
        
        itemService.saveEnvoy(this.form).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>
<style>
#EnvoyCreate{
  padding-top: 80px;
}
/* #CardCreate el-form el-form-item el-form-item__content{
  display: flex !important;
} */
</style>
