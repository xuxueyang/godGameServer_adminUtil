<template>
<div id="EnvoyList">
  <el-table
    :data="envoys"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="name"
      label="名字"
      width="150">
    </el-table-column>
    <el-table-column
      prop="gradeName"
      label="品级"
      width="150">
    </el-table-column>
    <el-table-column
      prop="attributeName"
      label="属性"
      width="150">
    </el-table-column>
    <el-table-column
      prop="raceName"
      label="种族"
      width="150">
    </el-table-column>       
    <el-table-column
      prop="designDescription"
      label="开发备注"
      width="300">
    </el-table-column>         
    
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="updateStarForce(scope.$index, envoys)"
          type="text"
          size="small">
          星辰值修改
        </el-button>
        <el-button
          @click.native.prevent="update(scope.$index, envoys)"
          type="text"
          size="small">
          更新
        </el-button>        
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import itemService from "@/http/itemService.js";

export default {
    name: 'EnvoyList',
    data() {
        return {
            envoys: []
        }
    },
    mounted() {
      this.getAllEnvoys()

    },
    methods: {
      updateStarForce(index, rows) {
        this.$router.push({  //核心语句
          path:'/managers/envoys/EnvoyNumDesign',   //跳转的路径
          query:{           //路由传参时push和query搭配使用 ，作用时传递参数
            id: rows[index].id ,  
          }
        })

      },
      update(index, rows) {
          
      },      
      getAllEnvoys() {
        const _setEnvoys = this.setEnvoys
        itemService.getAllEnvoys().then(function(res) {
          _setEnvoys(res)
        })
      },
      setEnvoys(res){
        this.envoys = res
      },
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style>
#EnvoyList{
  padding-top: 80px;
}
</style>
