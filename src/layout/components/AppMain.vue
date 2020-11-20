<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      console.log("this.$route.path", this.$route.path);

      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  background-color: #f5f6fa;
  max-height: calc(100vh - 95px);
  width: 100%;
  position: relative;
  overflow: hidden;
  /* padding: 40px 30px; */
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
