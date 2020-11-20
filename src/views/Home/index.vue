<template>
  <div class="homeMain" style="padding:100px;">
    <a :href="item.href" v-for="item in arr" :key="item.name">
      <div class="cardStyle">
        <h2>{{ item.name }}</h2>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { name: "战略目标定义", href: "/#/Strategy/index" },
        { name: "能力目标定义", href: "/#/ability/index" },
        { name: "项目能力定义", href: "/#/projectAnalysis/index" },
        { name: "投资组合分析", href: "/#/combinationAnalysis/index" }
      ]
    };
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.homeMain {
  display: flex;
  flex-wrap: wrap;
}
.cardStyle {
  width: 650px;
  height: 330px;
  background: orange;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
