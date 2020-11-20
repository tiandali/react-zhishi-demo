<template>
  <div class="editMain">
    <div class="leftTree">
      <div class="triangle"></div>
      <v-contextmenu ref="contextmenu">
        <v-contextmenu-item>添加同级节点</v-contextmenu-item>
        <v-contextmenu-item>添加子节点</v-contextmenu-item>
        <v-contextmenu-item>删除</v-contextmenu-item>
        <v-contextmenu-item>失效</v-contextmenu-item>
        <v-contextmenu-item>关闭</v-contextmenu-item>
      </v-contextmenu>
      <div class="tree">
        <a-tree
          showLine
          @expand="onExpand"
          :expandedKeys="expandedKeys"
          :autoExpandParent="autoExpandParent"
          @select="onSelect"
          @rightClick="rightClick"
          :selectedKeys="selectedKeys"
          :treeData="treeData"
          v-contextmenu:contextmenu
        />
      </div>
    </div>
    <div class="rightArea">
      <div class="desc">
        <div class="text">指标描述:</div>
        <a-textarea
          v-model="value"
          placeholder="Controlled autosize"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </div>
      <div class="desc">
        <div class="text">指标权重:</div>
        <a-input-number
          :default-value="100"
          :min="0"
          :max="100"
          :formatter="value => `${value}%`"
          :parser="value => value.replace('%', '')"
          @change="onChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { treeData } from "./treeData";
export default {
  name: "StrategyEdit",
  data() {
    return {
      ischangefile: true,
      showLine: true,
      showIcon: false,
      titleName: "xxxx骨干网基础设施",
      showTable: false,
      expandedKeys: ["0-0"],
      autoExpandParent: true,
      selectedKeys: ["xxxx骨干网基础设施"],
      treeData,
      value:
        "至2035年，XXXX系统基础设施升级建设基本完成，骨干网络覆盖率达到100%，指控网具备智能化情报分析水平，建成XX个大数据中心。"
    };
  },
  created() {
    this.treeData = treeData;
  },
  mounted() {
    this.treeData = treeData;
  },
  watch: {
    treeData(newval, oldval) {
      this.treeData = treeData;
    }
  },
  methods: {
    onChange(value) {
      console.log("changed", value);
    },
    onExpand(expandedKeys) {
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onSelect(selectedKeys, info) {
      const { selectedNodes } = info;
      const test1 = selectedNodes[0] ? selectedNodes[0].data : {};
      const test2 = test1.props ? test1.props : {};
      const selectName = test2.title ? test2.title : {};
      this.titleName = selectName;
      this.selectedKeys = selectedKeys;
      this.ischangefile = !this.ischangefile;
    },
    rightClick({ even, node }) {},
    handleEdit(index, row) {},
    handleSearch(index, row) {
      this.$router.push({
        path: "/info",
        query: {
          id: row.type
        }
      });
    },
    queryTable() {
      this.showTable = true;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.editMain {
  display: flex;
}
.leftTree {
  background: #02102d;
  margin-right: 30px;
  display: flex;
  width: 450px;
  height: calc(100vh - 150px);
  overflow-y: auto;
  overflow-y: overlay;
  flex-direction: column;
  padding: 30px;
  position: relative;
  .triangle {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: #13c6e2 transparent transparent #13c6e2;
  }
  .tree {
    .ant-tree,
    .ant-tree-show-line,
    .ant-tree-icon-hide {
      .ant-tree-treenode-switcher-open {
        li {
          margin: 0;
          padding: 25px 25px 0 25px;
          white-space: nowrap;
          list-style: none;
          outline: 0;
          &::before {
            position: absolute;
            left: 35px;
            width: 1px;
            height: 100%;
            height: calc(100% - 22px);
            margin: 22px 0 0;
            border-left: 1px dashed #5a7095;
            content: " ";
          }
          ul {
            .ant-tree-child-tree:not(:first-child) {
              &::before {
                position: absolute;
                left: -12px;
                top: 25px;
                color: #5a7095;
                content: "--------";
              }
            }
          }
        }
      }
      .ant-tree-treenode-switcher-close {
        &::before {
        }
      }
      li ul {
        padding-left: 25px;
      }
    }
  }

  // .ant-tree-treenode-switcher-close {
  //   &::before {
  //     position: absolute;
  //     left: -12px;
  //     top: 25px;
  //     color: rgb(14, 13, 13);
  //     content: "--------";
  //   }
  // }
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher {
    color: #afb9c8;
    background: #02102d;
    font-size: 20px;
  }
  .ant-tree li .ant-tree-node-content-wrapper {
    color: #5a7095;
    font-size: 16px;
  }
  .ant-tree-child-tree > li:first-child {
    padding-top: 25px;
    padding-left: 25px;
  }
}
.rightArea {
  display: flex;
  flex-direction: column;
  .desc {
    display: flex;
    margin-bottom: 30px;
    .text {
      width: 80px;
      padding-top: 4px;
    }
    .ant-input {
      width: 700px;
    }
  }
}
</style>
