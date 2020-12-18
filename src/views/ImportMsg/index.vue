<template>
  <div class="msgMain">
    <div class="top">
      <div class="leftarea">
        <el-form ref="form" :model="form" label-width="300px">
          <el-form-item label="System" class="item">
            <el-select v-model="form.select1" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option1"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
            <el-input v-model="input1"></el-input>
          </el-form-item>
          <el-form-item label="Mission Area-Domain">
            <el-select v-model="form.select2" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option2"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Record Type">
            <el-select v-model="form.select3" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option3"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="ACAT Code">
            <el-select v-model="form.select4" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option4"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Mission Critical">
            <el-select v-model="form.select5" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option5"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="Current or Planned Modernization"
            label-width=" 300px"
          >
            <el-select v-model="form.select6" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option6"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="rightarea">
        <el-form ref="form" :model="form" label-width="300px">
          <el-form-item label="DITPR ID">
            <el-input v-model="input2"></el-input>
          </el-form-item>
          <el-form-item label="Component">
            <el-select v-model="form.select7" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option7"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Transition Plan State">
            <el-select v-model="form.select8" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option8"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="MAC">
            <el-select v-model="form.select9" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option9"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="BIN">
            <el-input v-model="input3"></el-input>
          </el-form-item>
          <el-form-item label="Active/Archived">
            <el-select v-model="form.select10" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option10"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="center">
      <el-form ref="form" :model="form" label-width="300px">
        <el-form-item label="System Operation">
          <el-select v-model="form.select21" placeholder="请选择...">
            <el-option
              v-for="(item, index) in option21"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Type of IT/NSS">
          <el-select v-model="form.select22" placeholder="请选择...">
            <el-option
              v-for="(item, index) in option22"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="System Record Last Updated Date"
          label-width=" 300px"
        >
          <el-select v-model="form.select23" placeholder="请选择...">
            <el-option
              v-for="(item, index) in option23"
              :key="index"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
          <el-input v-model="input6"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="bottom">
      <div class="leftarea">
        <el-form ref="form" :model="form" label-width="300px">
          <el-form-item label="Core Last Updated">
            <el-select v-model="form.select31" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option31"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
            <el-input v-model="input4"></el-input>
          </el-form-item>
          <el-form-item label="Lead JCA" label-width=" 300px">
            <el-select v-model="form.select32" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option32"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="rightarea">
        <el-form ref="form" :model="form" label-width="300px">
          <el-form-item label="System Created">
            <el-select v-model="form.select33" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option33"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
            <el-input v-model="input5"></el-input>
          </el-form-item>
          <el-form-item label="Single Taxonomy Row">
            <el-radio v-model="radio" label=""></el-radio>
            <label>Version</label>
            <el-select v-model="form.select34" placeholder="请选择...">
              <el-option
                v-for="(item, index) in option34"
                :key="index"
                :label="item.name"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="footer">
      <el-button type="primary">Updated Search</el-button>
      <el-button type="primary">Clear Selections</el-button>
    </div>
  </div>
</template>

<script>
import {
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10,
  option21,
  option22,
  option23,
  option31,
  option32,
  option33,
  option34,
} from "./data";
import "echarts-gl";

export default {
  data() {
    return {
      radio: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      option5: option5,
      option6: option6,
      option7: option7,
      option8: option8,
      option9: option9,
      option10: option10,
      option21: option21,
      option22: option22,
      option23: option23,
      option31: option31,
      option32: option32,
      option33: option33,
      option34: option34,
      form: {
        select1: "",
        select2: "",
        select3: "",
        select4: "",
        select5: "",
        select6: "",
        select7: "",
        select8: "",
        select9: "",
        select10: "",
        select21: "",
        select22: "",
        select23: "",
        select31: "",
        select32: "",
        select33: "",
        select34: "",
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style rel="stylesheet/scss" lang="scss">
.msgMain {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px 100px;
  .top,
  .bottom {
    display: flex;
  }
  .center {
    .el-input {
      width: 200px;
    }
    // .el-select {
    //   width: 300px;
    // }
  }

  .leftarea {
    flex: 0 0 500px;
  }
  .rightarea {
    flex: 0 0 500px;
  }
  .el-form-item__content {
    display: flex;
  }
  .el-select {
    margin-right: 8px;
  }
  .el-input {
    margin-right: 8px;
  }
  .el-radio {
    line-height: 40px;
  }
  .footer {
    .el-button {
      margin-right: 30px;
    }
    margin-top: 30px;
    height: 40px;
    line-height: 40px;
    margin-left: 470px;
  }
}
</style>

