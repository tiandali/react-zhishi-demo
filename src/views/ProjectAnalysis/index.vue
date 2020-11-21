<!--
 * @Author: your name
 * @Date: 2020-11-20 13:57:23
 * @LastEditTime: 2020-11-21 10:23:45
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
              <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="功能优先项">
            <el-select v-model="form.type" placeholder="请选择战略目标">
              <el-option
                v-for="(item, index) in option"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目列表">
            <el-select v-model="form.types" placeholder="请选择战略目标">
              <el-option
                v-for="(item, index) in targetOptions"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
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
                <el-input v-model="form.data"></el-input>
              </el-form-item>
              <el-form-item label="主管部门">
                <el-input v-model="form.table"></el-input>
              </el-form-item>
              <el-form-item label="采办项目类别">
                <el-input v-model="form.target"></el-input>
              </el-form-item>
              <el-form-item label="任务保障类别">
                <el-input v-model="form.hours"></el-input>
              </el-form-item>
              <el-form-item label="任务重要度">
                <el-input v-model="form.pane"></el-input>
              </el-form-item>
              <el-form-item label="功能">
                <el-input v-model="form.province"></el-input>
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
          <el-table-column
            prop="date"
            label="目标/功能项"
            width="150"
            align="center"
          ></el-table-column>
          <el-table-column
            align="center"
            v-for="(item, index) in tableData"
            :key="index"
            :label="item.zip + ''"
            v-if="index < 5"
          >
            <el-table-column :label="item.name" width="120" align="center">
              <template slot-scope="{ row }">
                <div
                  :class="
                    row.province[index] == 'Low'
                      ? 'light-blue'
                      : row.province[index] == 'Moderate'
                      ? 'blue'
                      : row.province[index] == 'Strong'
                      ? 'yellow'
                      : ''
                  "
                >
                  {{ row.province[index] }}
                </div>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="能力贡献度评价">
        <div id="echarts1" style="width: 1200px;height:768px;" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { tableData, options, option, targetOptions } from "./data";
import "echarts-gl";

export default {
  data() {
    return {
      tableData: tableData,
      options: options,
      option: option,
      targetOptions: targetOptions,
      form: {
        region: "",
        type: [],
        types: []
      }
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById("echarts1"));
      const option = {
        title: {
          text: "投资数据",
          subtext: "数据来自网络"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["2011年", "2012年"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: ["巴西", "印尼", "美国", "印度", "中国", "总计"]
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style>
.yellow {
  background-color: rgb(255, 255, 0);
}
.light-blue {
  background-color: rgb(204, 255, 255);
}
.blue {
  background-color: rgb(0, 255, 255);
}
</style>
