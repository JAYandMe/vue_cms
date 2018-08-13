<template>
<div class="rights">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      </el-col>
    </el-row>
    <el-table
      v-loading="loading"
      :data="rightList"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="authName"
        label="权限名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="path"
        label="路径">
      </el-table-column>
      <el-table-column label="层级">
        <template slot-scope="scope">
            <span>{{scope.row.level |fmtlevel}}</span>
        </template>
      </el-table-column>
      
    </el-table>

</div>
</template>
<script>
import {getRightList} from '@/api'
export default {
    data(){
        return{
            loading:true,
            rightList:[]
        }
    },
    filters:{
        fmtlevel(level){
            if (level == '0'){
                return '一级'
            }else if (level == '1'){
                return '二级'
            }else{
                return '三级'
            }
        }
    },
    created (){
        this.loading = true
        getRightList({type:'list'}).then(res =>{
            if(res.meta.status === 200){
               this.rightList = res.data
               this.loading = false
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.el-breadcrumb {
  background-color: #D3DCE6;
  height: 45px;
  font-size: 15px;
  padding-left: 10px;
  line-height: 45px;
  margin-bottom: 15px;
}
</style>
