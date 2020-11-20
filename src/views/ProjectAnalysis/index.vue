
<!--
 * @Author: your name
 * @Date: 2020-11-20 13:57:23
 * @LastEditTime: 2020-11-20 17:28:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ALK-demo\src\views\ProjectAnalysis\index.vue
-->
<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="项目数据">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="任务领域">
            <el-select v-model="form.region" placeholder="请选择战略目标">
              <el-option v-for="(item,index) in targetOptions" :key="index" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="功能优先项">
            <el-select v-model="form.type" placeholder="请选择战略目标">
              <el-option v-for="(item,index) in targetOptions" :key="index" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目列表">
            <el-select v-model="form.types" placeholder="请选择战略目标">
              <el-option v-for="(item,index) in targetOptions" :key="index" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>项目属性数据</span>
          </div>
          <div>
            <el-form ref="form" :model="form" label-width="120px">
              <el-form-item label="项目名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="任务领域">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="主管部门">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="采办项目类别">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="任务保障类别">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="任务重要度">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="功能">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="主要服务能力">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="匹配度评价">
        <el-table :data="tableData" style="width: 100%;">
          <el-table-column prop="date" label="目标/功能项" width="150" align="center"> </el-table-column>
          <el-table-column align="center" v-for="(item,index) in tableData" :key="index" :label="item.date">
            <el-table-column prop="province" label="功能优先项" width="120" align="center">
              <template scope="{row}">
                <div :class="row.province>=1?'red':''">{{row.province}}</div>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="能力贡献度评价">
        123123
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { tableData , options , option, targetOptions} from "./data" 

export default {
  data() {
    return {
      tableData: tableData,
      options: options,
      option: option,
      targetOptions: targetOptions,
      form:{
        region: '',
        type: [],
        types: []
      }
    };
  },
  components: {
    
  },
  mounted() {

  },
  methods: {
    
  },
};
</script>

<style>
.red {
  background: red;
}
</style>


