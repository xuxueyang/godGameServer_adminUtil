<template>

<div id="EnvoyNumDesign">
    <!--  设计卡牌的数值，根据ID进入页面，然后设置数值，并且保存 -->
    <el-form ref="form" :model="form" label-width="100px">
        <el-form-item>
            <el-col :span="11">
                <el-form-item  label="棋子ID"><el-input v-model="form.id"></el-input></el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="名称"><el-input v-model="form.name"></el-input></el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col :span="11">
                <el-form-item label="品级">{{form.gradeName}}</el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="星辰值合计数值">{{form.starForce}}</el-form-item>
            </el-col>            
        </el-form-item>
        <el-form-item>
            <el-col :span="11">
                <el-form-item label="已分配">{{getHasUse()}}</el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="未分配">{{form.starForce - getHasUse()}}</el-form-item>
            </el-col>   
        </el-form-item>
         <el-form-item>
            <el-col :span="11">
                <el-form-item label="基础血量">
                    <el-input-number v-model="form.hp"  :min="0"  @click="updateStarForce"></el-input-number>
                    数值：{{ form.hp * config.numTransfer.hp }}
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="成长血量">
                    <el-input-number v-model="form.incrHp"  :min="0" @click="updateStarForce" ></el-input-number>
                    数值：{{ form.incrHp * config.numTransfer.incrHp }}
                </el-form-item>
            </el-col>
        </el-form-item>       
        <el-form-item>
            <el-col :span="11">
                <el-form-item label="基础攻击">
                    <el-input-number v-model="form.attack"  :min="0"  @click="updateStarForce" ></el-input-number>
                    基础攻击：{{ form.attack * config.numTransfer.attack }}
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="成长攻击">
                    <el-input-number v-model="form.incrAttack"  :min="0"  @click="updateStarForce"></el-input-number>
                    成长攻击：{{ form.incrAttack * config.numTransfer.incrAttack }}
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col :span="11">
                <el-form-item label="基础防御">
                    <el-input-number v-model="form.defense"  :min="0"  @click="updateStarForce"></el-input-number>
                    基础防御：{{ form.defense * config.numTransfer.defense }}
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="成长防御">
                    <el-input-number v-model="form.incrDefense"  :min="0"  @click="updateStarForce"></el-input-number>
                    成长防御：{{ form.incrDefense * config.numTransfer.incrDefense }}
                </el-form-item>
            </el-col>
        </el-form-item>  
         <el-form-item>
            <el-col :span="11">
                <el-form-item label="移动距离">
                    <el-input-number v-model="form.move"  :min="0" :step="5" @click="updateStarForce"></el-input-number>
                    移动距离：{{ form.move * config.numTransfer.move }}
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="攻击距离">
                    <el-input-number v-model="form.attackDistance"  :min="0" :step="10" @click="updateStarForce"></el-input-number>
                    攻击距离：{{ form.attackDistance * config.numTransfer.attackDistance }}
                </el-form-item>
            </el-col>
        </el-form-item> 
        <el-form-item>
            <el-col :span="11">
                <el-form-item label="等级">
                    <el-input-number v-model="level"  :min="1" :step="1" :max="9" @click="updateStarForce"></el-input-number>
                    等级：{{ this.level }}
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="攻击距离">
                    <el-input-number v-model="de"  :min="50" :step="10" @click="updateStarForce"></el-input-number>
                    防御减伤：{{ (0.0 + form.defense * config.numTransfer.defense + form.incrDefense * config.numTransfer.incrDefense*this.level ) / (0.0 +form.defense * config.numTransfer.defense + form.incrDefense * config.numTransfer.incrDefense*this.level + this.de) }}
                </el-form-item>
            </el-col>
        </el-form-item>     
          
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        <!-- echart表格呈现，按照等级成长的数值，减伤这些样式 -->

    </el-form>
    <div id="EnvoyNumDesignEchart" style="width: 500px;height:500px">

    </div>
</div>
</template>

<script>
import itemService from "@/http/itemService.js";

export default {
    name: 'EnvoyNumDesgin',
    data() {
        return {
            myChart: null,
                
            config: {
                numTransfer: {
                    attack: 0,
                    incrAttack: 0,
                    defense: 0,
                    incrDefense: 0,
                    hp: 0,
                    incrHp: 0,
                    move: 0,
                    attackDistance: 0
                }
            },
            level: 1,
            de: 100,//防御系数
            form: {
                id: '',
                name: '',
                gradeName: '',
                starForce: 0,
                attack: 0,
                incrAttack: 0,
                defense: 0,
                incrDefense: 0,
                hp: 0,
                incrHp: 0,
                move: 0,
                attackDistance: 0
            },
        }
    },
    mounted() {
      this.getItemConfigs()
      var param = this.$route.query;
    //   console.log(param.id)
    //   this.form.id = param.id
      //得到棋子数据
      this.getEnvoy(param.id)
      this.myChart = this.$echarts.init(document.getElementById('EnvoyNumDesignEchart'));
      this.myChart.setOption(this.getDefaultOption(this.level)) 
    },
    methods: {
        onSubmit() {
            itemService.saveEnvoy(this.form).then(res => {
            console.log(res)
            })
        },
        updateStarForce () {
            this.myChart.setOption(this.getDefaultOption(this.level))
        },
      getEnvoy(id){
          const _setForm = this._setForm
          itemService.getEnvoy(id).then(res => {
              _setForm(res)
          })
          
      },
      getHasUse() {
          return this.form.attack + this.form.incrAttack + this.form.hp + this.form.incrHp  + this.form.defense 
          + this.form.incrDefense + this.form.move + this.form.attackDistance
      },
      getItemConfigs() {
        const _setConfig = this.setConfig
        itemService.getItemConfigs().then(function(res) {
          _setConfig(res)
        })
      },
      setConfig(res){
        this.config = res
      },
      _setForm(res){
          this.form = res
          
      },
      getDefaultOption( level) {
          var  echartOption = {
                title : {
                    text: '星辰具体数值',
                    subtext: '等级' + level
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    x : 'center',
                    data:['基础数值','等级成长']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                polar : [
                    {
                        indicator : [
                            {text : '血量',max: 100},
                            {text : '攻击',max: 100},
                            {text : '防御',max: 100},
                            {text : '移动距离',max: 100},
                            {text : '攻击距离',max: 100}
                        ],
                        radius : 130
                    }
                ],
                series : [
                    {
                        name: '完全实况球员数据',
                        type: 'radar',
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                }
                            }
                        },
                        data : [
                            {
                                value : [97, 42, 88, 94, 86],
                                name : '基础数值'
                            },
                            {
                                value : [97, 32, 74, 95, 92],
                                name : '等级成长'
                            }
                        ]
                    }
                ]
            }
        return echartOption
      }
    }
}
</script>

<style>
#EnvoyNumDesign{
  padding-top: 80px;
  width: 700px;
}
</style>
