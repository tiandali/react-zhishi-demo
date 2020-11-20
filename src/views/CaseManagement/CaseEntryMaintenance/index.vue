<template>
  <div>
    <datatable
      :table-head="tablehead"
      :table-data="tableData"
      :isSelect="true"
      :handleBtn="btnData"
      :status_line="true"
      :show_btn_bottom="true"
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
      tableData: [],
      btnData: ["修改1", "删除1"],
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
  components: {
    datatable
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    changedata() {
      console.log("caseEntryMaintenance");
    },
    deletdata() {
      console.log("caseDate");
    },
    fetchData() {
      this.listLoading = true;
      getTabelData().then(response => {
        this.tableData = response.data.items;
        this.listLoading = false;
      });
    }
  }
};
</script>

<style></style>
