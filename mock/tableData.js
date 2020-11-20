const Mock = require("mockjs");
Mock.Random.extend({
  phone: function() {
    var phonePrefixs = ["132", "135", "189"]; // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/); //Number()
  },

  prototype_2: function() {
    let arr = ["权限类型I", "权限类型E"];
    return this.pick(arr);
  },
  status: function() {
    let arr = ["正常", "失败", "错误"];
    return this.pick(arr);
  }
});

var obj = [
  "超级管理员1",
  "超级管理员2",
  "超级管理员3",
  "超级管理员4",
  "超级管理员5"
];

function getname() {
  return obj[Math.floor(Math.random() * obj.length)];
}
const data = Mock.mock({
  "items|30": [
    {
      id: "@id",
      name: `${getname()}`,
      prototype_1: "@phone",
      prototype_2: "@prototype_2",
      prototype_3: "@phone",
      prototype_4: "@phone",
      address: "@region" + "@province" + "@city" + "@county",
      zip: "@zip",
      status: "@status"
    }
  ]
});

module.exports = [
  {
    url: "/waw_mock/table_data",
    type: "get",
    response: config => {
      const items = data.items;
      return {
        code: "10000",
        data: {
          total: items.length,
          items: items
        }
      };
    }
  }
];
