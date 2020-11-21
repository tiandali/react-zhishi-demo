/*
 * @Author: your name
 * @Date: 2020-11-20 14:34:18
 * @LastEditTime: 2020-11-21 10:45:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ALK-demo\src\views\Ability\data.js
 */

//目标匹配矩阵数据 第一行表头和第二行表头需要手动修改
export const tableData = [
  {
    date: "权重", //第一列表头
    province: [1, 2], //2列数据为一组
    city: [1.33, 1.23],
    zip: [3, 5],
    name: [4, 6],
    weights: [7, 9]
  },
  {
    date: "J11-兵力管理",
    province: [1, 2],
    city: [1.33, 1.23],
    zip: [3, 5],
    name: [4, 6],
    weights: [7, 9]
  },
  {
    date: "J12-兵力建设",
    province: [1, 2],
    city: [1.33, 1.23],
    zip: [3, 5],
    name: [4, 6],
    weights: [7, 9]
  },
  {
    date: "J13-配置",
    province: [1, 2],
    city: [1.33, 1.23],
    zip: [3, 5],
    name: [4, 6],
    weights: [7, 9]
  },
  {
    date: "J14-战备",
    province: [1, 2],
    city: [1.33, 1.23],
    zip: [3, 5],
    name: [4, 6],
    weights: [7, 9]
  },
  {
    date: "J21-ISR-1",
    province: [1, 2],
    city: [1.33, 1.23],
    zip: [3, 5],
    name: [4, 6],
    weights: [7, 9]
  },
  {
    date: "J21-ISR-2",
    province: [1, 2],
    city: [1.33, 1.23],
    zip: [3, 5],
    name: [4, 6],
    weights: [7, 9]
  }
];
//目标匹配重复度数据
export const tableDatas = [
  {
    date: "目标", //第一列和第一行表头
    province: 82, //第二列和第二行表头
    repeat: [], //表格第一个数字
    percentage: [], //表格左上角的百分比
    weights: [] //表格右下角的百分比
  },
  {
    date: "J11-兵力管理",
    province: 217,
    repeat: [66],
    percentage: ["30%"],
    weights: ["80%"]
  },
  {
    date: "J12-兵力建设",
    province: 114,
    repeat: [33, 79],
    percentage: ["29%", "69%"],
    weights: ["40%", "36%"]
  },
  {
    date: "J13-配置",
    province: 136,
    repeat: [26, 72, 59],
    percentage: ["19%", "53%", "43%"],
    weights: ["32%", "33%", "52%"]
  },
  {
    date: "J14-战备",
    province: 138,
    repeat: [19, 34, 42, 70],
    percentage: ["14%", "25%", "30%", "51%"],
    weights: ["23%", "16%", "37%", "51%"]
  },
  {
    date: "J21-ISR-1",
    province: 38,
    repeat: [13, 25, 18, 10, 13],
    percentage: ["34%", "66%", "47%", "26%", "34%"],
    weights: ["16%", "12%", "16%", "7%", "9%"]
  },
  {
    date: "J21-ISR-2",
    province: 61,
    repeat: [2, 3, 14, 5, 57, 5],
    percentage: ["3%", "5%", "23%", "8%", "93%", "8%"],
    weights: ["2%", "1%", "12%", "4%", "41%", "13%"]
  },
  {
    date: "J21-ISR-2",
    province: 173,
    repeat: [55, 109, 73, 103, 69, 15, 22],
    percentage: ["32%", "63%", "42%", "60%", "40%", "9%", "13%"],
    weights: ["67%", "50%", "64%", "76%", "50%", "39%", "36%"]
  }
];

export const options = [
  {
    name: "XXX威慑打击"
  },
  {
    name: "XXX战略预警"
  },
  {
    name: "XXX信息支援"
  }
];

export const option = [
  {
    name: "兵力支持"
  },
  {
    name: "战场感知"
  },
  {
    name: "指控"
  }
];

export const targetOptions = [
  {
    name: "XXXX2035建设发展规划"
  },
  {
    name: "YYYY发展目标"
  }
];
