<template>
  <div class="strategy" style="padding:30px">
    <a-radio-group
      :default-value="value"
      v-model="value"
      @change="onChange"
      button-style="solid"
    >
      <a-radio-button value="a">
        战略目标编辑
      </a-radio-button>
      <a-radio-button value="b">
        战略目标体系概览
      </a-radio-button>
    </a-radio-group>
    <div class="containerStyle" v-if="value === 'a'">
      <StrategyEdit />
    </div>
    <div class="containerStyle" v-else>
      <Overview />
    </div>
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
    return {
      animated: false,
      value: "a"
    };
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onChange(e) {
      console.log("radio1 checked", e.target.value);
      this.value = e.target.value;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.strategy {
  // display: flex;
  // flex: 1;
  .containerStyle {
    margin-top: 20px;
  }
}
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
