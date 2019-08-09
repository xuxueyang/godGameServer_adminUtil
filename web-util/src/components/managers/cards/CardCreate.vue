<template>
<div id="CardCreate">
<el-form ref="form" :model="form" label-width="80px">
  <p style="margin-bottom:20px;">创建卡牌</p>
  <el-form-item label="ID" style="display: flex">
    <el-input v-model="form.id"></el-input>
  </el-form-item>
  <el-form-item label="名称name" style="display: flex">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="品级grade"   style="display: flex">
    <el-select v-model="form.grade" placeholder="请选择品级">
      <el-option v-for=" tmp in config.Grade" v-bind:key="tmp" :label="tmp.label" :value="tmp.value"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="属性attribute"   style="display: flex">
    <el-select v-model="form.attribute" placeholder="请选择属性">
      <el-option v-for=" tmp in config.Attribute" v-bind:key="tmp" :label="tmp.label" :value="tmp.value"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="类型cardType"   style="display: flex">
    <el-select v-model="form.cardType" placeholder="请选择类型">
      <el-option v-for=" tmp in config.CardType" v-bind:key="tmp" :label="tmp.label" :value="tmp.value"></el-option>
    </el-select>
  </el-form-item>
  </el-form-item>
    <el-form-item label="种族race"   style="display: flex">
    <el-select v-model="form.race" placeholder="请选择种族">
      <el-option v-for=" tmp in config.Race" v-bind:key="tmp" :label="tmp.label" :value="tmp.value"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="效果">
    <el-checkbox-group v-model="form.effect">
      <el-checkbox v-for=" tmp in config.Effect" v-bind:key="tmp" :label="tmp.description" :name="tmp.id"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="描述">
    <el-input type="textarea" v-model="form.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
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
          description: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style>
#CardCreate{
  padding-top: 80px;
}
/* #CardCreate el-form el-form-item el-form-item__content{
  display: flex !important;
} */
</style>
