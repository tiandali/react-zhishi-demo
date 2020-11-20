<template>
  <div>
    <datatable
      :table-head="tablehead"
      :table-data="tableData_1"
      :isSelect="true"
      :handle-btn="btnData"
      :status_line="true"
      :show_btn_bottom="false"
      @changedata="changedata"
      @deletdata="deletdata"
    />
  </div>
</template>

<script>
import datatable from "@/components/table/dataTable";
import { getTabelData } from "@/api/tableMock";

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      tableData_1: [],
      btnData: ["浏览", "测试"],
      tablehead: [
        {
          fixed: true,
          prop: "name",
          label: "名字",
          fit: false,
          width: "200"
        },
        {
          fixed: false,
          prop: "prototype_1",
          label: "电话",
          fit: false,
          width: "200"
        },
        {
          fixed: false,
          prop: "prototype_2",
          label: "属性2",
          fit: false,
          width: "200"
        },
        {
          fixed: false,
          prop: "prototype_3",
          label: "属性3",
          fit: false,
          width: "200"
        },
        {
          fixed: false,
          prop: "prototype_4",
          label: "属性4",
          fit: false,
          width: "200"
        },
        {
          fixed: false,
          prop: "prototype_4",
          label: "属性5",
          fit: true,
          width: "200"
        },

        {
          fixed: false,
          prop: "status",
          label: "状态",
          fit: true,
          width: "",
          status_line: true
        }
      ]
    };
  },
  mounted() {
    this.fetchData();
  },
  components: {
    datatable
  },
  methods: {
    changedata(data) {
      console.log("changedata", data);
    },
    deletdata(data, id_collection) {
      if (data.scope) {
        this.tableData_1.splice(data.scope.$index, 1);
      } else {
        this.tableData_1 = this.tableData_1.filter(
          item => !data.id_collection.includes(item.id)
        );
      }
    },
    fetchData() {
      this.listLoading = true;
      getTabelData().then(response => {
        this.tableData_1 = response.data.items;
        this.listLoading = false;
      });
    }
  }
};
</script>

<style></style>
