<template>
  <div class="table_container">
    <el-table
      ref="multipleTable"
      :data="tableData_1"
      style="width: 100%"
      height="760"
      @select="selectItem"
    >
      <el-table-column v-if="isSelect" type="selection"> </el-table-column>
      <template v-for="(item, index) in tableHead">
        <el-table-column
          v-if="!item.status_line"
          :prop="item.prop"
          :fixed="item.fixed"
          :label="item.label"
          :fit="item.fit"
          :key="index"
          :width="item.width"
        >
        </el-table-column>
      </template>
      <el-table-column v-if="status_line" prop="status" label="状态" fit>
        <template slot-scope="scope">
          <span>
            <i
              :class="{
                circle_color: true,
                color_err: scope.row.status === '错误',
                color_nomal: scope.row.status === '正常',
                color_fail: scope.row.status === '失败'
              }"
            ></i>
            <span>{{ scope.row.status }}</span>
          </span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="256">
        <template slot-scope="scope">
          <el-button
            @click="changeLine()"
            type="primary"
            size="medium"
            v-text="handleBtn[0]"
          ></el-button>
          <el-button
            :data-btn="1"
            @click="deletLine(scope)"
            type="primary"
            size="medium"
            v-text="handleBtn[1]"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <dialog-out />
    <!-- 后期通过vif去设置显示 -->
    <div class="table_foot">
      <el-button
        :data-btn="1"
        @click="deletLine()"
        type="primary"
        size="medium"
        v-if="show_btn_bottom"
        >删除</el-button
      >
      <el-pagination
        background
        :current-page="currentPage2"
        :page-size="8"
        layout="total, prev, pager, next, jumper"
        :total="total_num"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
      <dialogOut @output="changeLine" :flag="flag" />
    </div>
  </div>
</template>

<script>
import "./table.scss";
var _ = require("lodash");
import dialogOut from "@/components/dialog/dialog";

export default {
  props: {
    tableData: {
      required: true,
      default: []
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    handleBtn: {
      required: true,
      default: []
    },
    tableHead: {
      required: true,
      default: []
    },
    // 状态列展示
    status_line: {
      required: true,
      default: false
    },
    // show table外层按钮
    show_btn_bottom: {
      required: true,
      default: true
    }
  },
  data() {
    return {
      currentPage2: 1,
      multipleItem: null,
      id_collection: [],
      total_num: 0,
      tableData_1: null,
      tableData_2: null,
      tableDataClone: [],
      flag: false
    };
  },

  created() {},
  mounted() {
    this.$nextTick(() => {});
  },
  computed: {},
  watch: {
    tableData: {
      handler(old, new_val) {
        this.tableDataClone = _.cloneDeep(old);
        console.log(this.tableDataClone);

        this.tableData_1 =
          this.currentPage2 === 1
            ? this.tableDataClone.slice(0, 8)
            : this.tableDataClone.slice(
                (this.currentPage2 - 1) * 8,
                (this.currentPage2 - 1) * 8 + 8
              );
        this.total_num = this.tableDataClone.length;
      },
      immediate: true,
      deep: true
    }
  },
  components: {
    dialogOut
  },

  methods: {
    changeLine(data) {
      this.flag = data !== undefined ? data : true;
    },
    // 分页切换
    handleCurrentChange(val) {
      this.currentPage2 = val;
      this.tableData_1 = this.tableDataClone.slice(
        (val - 1) * 8,
        (val - 1) * 8 + 8
      );
    },
    // 多选框选择
    selectItem(val) {
      this.multipleItem = val;
      var arr = [];
      val.forEach(item => {
        arr.push(item.id);
      });
      this.id_collection = Array.from(new Set(arr)); // 过滤出id 并且去重
    },

    deletLine(scope) {
      this.$emit("deletdata", { scope, id_collection: this.id_collection });
    }
  }
};
</script>

<style lang="sass" scoped></style>
