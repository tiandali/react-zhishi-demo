
<!--
 * @Author: your name
 * @Date: 2020-11-20 13:57:23
 * @LastEditTime: 2020-11-21 10:43:20
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
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.province[0]}}</template></el-table-column>
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.city[0]}}</template></el-table-column>
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.zip[0]}}</template></el-table-column>
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.name[0]}}</template></el-table-column>
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.weights[0]}}</template></el-table-column>
          </el-table-column>
          <el-table-column label="XXX信息支援" align="center">
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.province[1]}}</template></el-table-column>
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.city[1]}}</template></el-table-column>
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.zip[1]}}</template></el-table-column>
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.name[1]}}</template></el-table-column>
            <el-table-column label="功能优先项" width="120" align="center"><template slot-scope="{row}">{{row.weights[1]}}</template></el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="目标匹配重复度">
        <el-table :data="tableDatas" style="width: 100%;">
          <el-table-column prop="date" label="" width="150" align="center"> </el-table-column>
          <el-table-column prop="province" label="" width="150" align="center"> </el-table-column>
          <el-table-column align="center" v-for="(item,index) in tableDatas" :key="index" :label="item.date">
            <el-table-column :label="item.province+''" width="120" align="center">
              <template slot-scope="{row}">
                <div :class="(parseInt(row.percentage[index]) >= 80 || parseInt(row.weights[index]) >= 80)?'blue':
                  (parseInt(row.percentage[index]) >= 70 || parseInt(row.weights[index]) >= 70)?'yellow':
                  (parseInt(row.percentage[index]) >= 50 || parseInt(row.weights[index]) >= 50)?'light-blue':
                  (row.repeat[index] == '')?'gray':''">
                  <div class="three-target">
                    <div class="default-class">{{row.repeat[index]}}</div>
                    <div class="default-class">{{row.percentage[index]}}</div>
                  </div>
                  <div class="three-target">
                    <div class="default-class">{{row.weights[index]}}</div>
                    <div class="default-class"></div>
                  </div>
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
import { tableData, tableDatas, options , option, targetOptions} from "./data"

export default {
  data() {
    return {
      tableData: tableData,
      tableDatas: tableDatas,
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
  },
};
</script>

<style scoped>
.three-target{
  display: flex;
  width: 100%;
  height: 100%;
}
.light-blue{
  background-color: rgb(204, 255, 255);
}
.blue{
  background-color: rgb(0, 255, 255);
}
.yellow{
  background-color: rgb(255, 255, 0);
}
.gray{
  background-color: rgb(192, 192, 192);
}
.default-class{
  flex: 1;
}
</style>

