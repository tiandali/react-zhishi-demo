
<!--
 * @Author: your name
 * @Date: 2020-11-20 13:57:23
 * @LastEditTime: 2020-11-20 18:03:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ALK-demo\src\views\AbilityAnalysis\index.vue
-->
<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="目标匹配矩阵">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="战略目标">
            <el-select v-model="form.region" placeholder="请选择战略目标">
              <el-option v-for="(item,index) in targetOptions" :key="index" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="目标">
            <el-checkbox-group v-model="form.type">
              <el-checkbox v-for="(item,index) in options" :key="index" :label="item.name" :name="item.name"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="能力领域">
            <el-checkbox-group v-model="form.types">
              <el-checkbox v-for="(item,index) in option" :key="index" :label="item.name" :name="item.name"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">筛选</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%;">
          <el-table-column prop="date" label="目标/功能项" width="150" align="center"> </el-table-column>
          <el-table-column label="XXXX战略预警" align="center">
            <el-table-column prop="province" label="功能优先项" width="120" align="center"></el-table-column>
            <el-table-column prop="city" label="功能优先项" width="120" align="center"></el-table-column>
            <el-table-column prop="zip" label="功能优先项" width="120" align="center"></el-table-column>
            <el-table-column prop="name" label="功能优先项" width="120" align="center"></el-table-column>
            <el-table-column prop="weights" label="功能优先项" width="120" align="center"></el-table-column>
          </el-table-column>
          <el-table-column label="XXX信息支援" align="center">
            <el-table-column prop="province" label="功能优先项" width="120" align="center"></el-table-column>
            <el-table-column prop="city" label="功能优先项" width="120" align="center"></el-table-column>
            <el-table-column prop="zip" label="功能优先项" width="120" align="center"></el-table-column>
            <el-table-column prop="name" label="功能优先项" width="120" align="center"></el-table-column>
            <el-table-column prop="weights" label="功能优先项" width="120" align="center"></el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="目标匹配重复度">
        <el-table :data="tableData" style="width: 100%;" :cell-class-name="cellClass">
          <el-table-column prop="date" label="" width="150" align="center"> </el-table-column>
          <el-table-column prop="date" label="" width="150" align="center"> </el-table-column>
          <el-table-column align="center" v-for="(item,index) in tableData" :key="index" :label="item.date">
            <el-table-column label="功能优先项" width="120" align="center">
              <template scope="{row}">
                <div class="three-target">
                  <div class="default-class">{{row.province}}</div>
                  <div class="default-class">{{row.province}}</div>
                </div>
                <div class="three-target">
                  <div class="default-class">{{row.province}}</div>
                  <div class="default-class"></div>
                </div>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
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
      radio: '目标匹配矩阵',
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
  methods: {
    submitForm(formName){
      console.log(formName)
    },
    resetForm(formName) {
      console.log(formName)
      this.$refs[formName].resetFields();
    },
    cellClass(row, column, rowIndex, columnIndex){
      console.log(row, column, rowIndex, columnIndex)
    }
  },
};
</script>

<style scoped>
.three-target{
  display: flex;
}
.default-class{
  flex: 1;
}
</style>

