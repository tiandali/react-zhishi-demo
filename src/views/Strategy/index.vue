<template>
  <div style="padding:30px">
    <a-tabs>
      <a-tab-pane key="1" tab="战略目标编辑">
        <StrategyEdit />
      </a-tab-pane>
      <a-tab-pane key="2" tab="战略目标体系概览">
        <Overview />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import StrategyEdit from "./StrategyEdit";
import Overview from "./Overview";
export default {
  name: "Strategy",
  components: {
    StrategyEdit,
    Overview
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
// .homeMain {
//   display: flex;
//   flex-wrap: wrap;
// }
// .cardStyle {
//   width: 650px;
//   height: 330px;
//   background: orange;
//   margin: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
</style>
