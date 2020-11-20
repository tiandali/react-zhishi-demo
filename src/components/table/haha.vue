<template>
  <div>
    <div v-for="(item, index) in data_2" :key="index">{{ item.label }}</div>
    <button @click="test">xiugai1</button>

    <div v-for="(item, index) in data_2" :key="index + 'waw'">
      {{ item.label + "wawa" }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_3: [],
      dataClone: _.cloneDeep(this.data_1)
    };
  },
  props: {
    data_1: {
      required: true,
      default: []
    }
  },
  computed: {
    data_2() {
      return this.data_1;
    },
    data_4: {
      get() {
        return this.data_2;
      },
      set(val) {
        console.log(this, val);
        // this.data_4 = val;
      }
    }
  },

  methods: {
    test() {
      this.data_2 = [{ label: "waw", prop: "1111" }];
      //   this.data_3 = this.data_2.push({ label: "添加", prop: "tianjia" });
      console.log(this.data_2, this.data_1);
    }
  }
};
</script>

<style></style>
