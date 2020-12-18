<template>
  <el-tabs type="border-card">
    <el-tab-pane label="战略目标编辑">
      <StrategyEdit />
    </el-tab-pane>
    <el-tab-pane label="战略目标体系概览">
      <Overview />
    </el-tab-pane>
  </el-tabs>
  <!-- <div class="strategy" style="padding:30px">
    <a-radio-group :default-value="value" v-model="value" @change="onChange" button-style="solid">
      <a-radio-button value="a">战略目标编辑</a-radio-button>
      <a-radio-button value="b">战略目标体系概览</a-radio-button>
    </a-radio-group>
    <div class="containerStyle" v-if="value === 'a'">
      <StrategyEdit />
    </div>
    <div class="containerStyle" v-else>
      <Overview />
    </div>
  </div> -->
</template>
<script>
import StrategyEdit from "./StrategyEdit";
import Overview from "./Overview";
export default {
  name: "Strategy",
  components: {
    StrategyEdit,
    Overview,
  },
  data() {
    return {
      value: "a",
    };
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.strategy {
  .containerStyle {
    margin-top: 20px;
  }
}
</style>
