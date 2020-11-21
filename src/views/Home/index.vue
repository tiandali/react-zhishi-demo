<template>
  <div class="homeMain" style="padding:10px 30px;">
    <div class="header">
      <img :src="banner" style="width: 100%; height: 140px" alt="" />
      <h2 class="title">{{ titleName }}</h2>
    </div>
    <a :href="item.href" v-for="item in arr" :key="item.name">
      <div class="cardStyle">
        <div class="pic">
          <img :src="item.img" style="marginTop:-20px" />
        </div>

        <h2 class="text">
          {{ item.name }}
          <img :src="icon" alt="" />
        </h2>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleName: "XXXX建设项目绩效评估分析系统",
      banner: require("../../assets/img/banner_bg.jpg"),
      icon: require("../../assets/img/5.png"),
      arr: [
        {
          name: "战略目标定义",
          href: "/#/Strategy/index",
          img: require("../../assets/img/4.png")
        },
        {
          name: "能力目标定义",
          href: "/#/ability/index",
          img: require("../../assets/img/2.png")
        },
        {
          name: "项目能力定义",
          href: "/#/projectAnalysis/index",
          img: require("../../assets/img/3.png")
        },
        {
          name: "投资组合分析",
          href: "/#/combinationAnalysis/index",
          img: require("../../assets/img/1.png")
        }
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
  .header {
    position: relative;
    h2 {
      position: absolute;
      color: #fff;
      top: 40%;
      left: 30%;
      font-size: 25px;
    }
  }
}
.cardStyle {
  width: 600px;
  height: 330px;
  background: #fff;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 8px rgba(232, 237, 246, 1);
  // position: relative;
  .pic {
    img {
      height: 240px;
    }
  }
  .text {
    // position: absolute;
    // bottom: -35px;
    // left: 0;
    color: #fff;

    padding: 0 20px;

    width: 100%;
    height: 50px;
    background-color: rgb(54, 102, 228);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
