<template>
  <div class="homeMain" style="padding:10px 30px;">
    <div class="header">
      <img :src="banner" style="width: 100%; height: 140px" alt="" />
      <h2 class="title">{{ titleName }}</h2>
    </div>
    <div class="container">
      <!-- <a :href="item.href" v-for="item in arr" :key="item.name">
        <div class="cardStyle">
          <div class="pic">
            <img :src="item.img" style="width:300px,height:300px" />
          </div>

          <h2 class="text">
            {{ item.name }}
            <img :src="icon" alt="" />
          </h2>
        </div>
      </a> -->
      <div
        :id="id"
        v-for="id in ids"
        :key="id"
        style="width: 440px;height:360px;marginRight:20px"
      />
    </div>
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
          name: "项目匹配分析",
          href: "/#/projectAnalysis/index",
          img: require("../../assets/img/3.png")
        },
        {
          name: "投资组合分析",
          href: "/#/combinationAnalysis/index",
          img: require("../../assets/img/1.png")
        }
      ],
      ids: ["line", "bar", "pie", "radar", "sankey", "scatter"]
    };
  },
  created() {},
  mounted() {
    this.drawChart("line");
    this.drawChart("bar");
    this.drawChartpie("pie");
    this.drawChartradar("radar");
    this.drawChartsankey("sankey");
    this.drawChartscatter("scatter");
  },
  watch: {},
  methods: {
    drawChart(id) {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById(id));
      const option = {
        title: {
          text: "数据"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["2011年", "2012年"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["2012", "2013", "2014", "2015", "2016"],
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          // type: "category",
          type: "value"
        },
        series: [
          {
            name: "Forest",
            type: id,
            barGap: 0,
            data: [320, 332, 301, 334, 390]
          },
          {
            name: "Steppe",
            type: id,
            data: [220, 182, 191, 234, 290]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChartpie(id) {
      const myChart = this.$echarts.init(document.getElementById(id));
      const option = {
        title: {
          text: "饼图",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChartradar(id) {
      const myChart = this.$echarts.init(document.getElementById(id));
      const option = {
        title: {
          text: "基础雷达图"
        },
        tooltip: {},
        grid: {
          right: 50,
          bottom: 40
        },
        legend: {
          top: 5,
          itemGap: 20,
          data: ["预算分配", "实际开销"]
        },
        label: {
          show: false,
          color: "#000",
          distance: 1
        },
        radar: {
          name: {
            textStyle: {
              color: "#000"
            }
          },
          indicator: [
            { name: "销售", max: 650 },
            { name: "管理", max: 160 },
            { name: "信息技术", max: 300 },
            { name: "客服", max: 380 },
            { name: "研发", max: 520 },
            { name: "市场", max: 250 }
          ],
          center: ["50%", "55%"]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [430, 100, 280, 350, 500, 190],
                name: "预算分配"
              },
              {
                value: [500, 140, 280, 310, 420, 210],
                name: "实际开销"
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChartscatter(id) {
      const myChart = this.$echarts.init(document.getElementById(id));
      let dataBJ = [
        [1, 55, 9, 56, 0.46, 18, 6, "良"],
        [2, 25, 11, 21, 0.65, 34, 9, "优"],
        [3, 56, 7, 63, 0.3, 14, 5, "良"],
        [4, 33, 7, 29, 0.33, 16, 6, "优"],
        [5, 42, 24, 44, 0.76, 40, 16, "优"],
        [6, 82, 58, 90, 1.77, 68, 33, "良"],
        [7, 74, 49, 77, 1.46, 48, 27, "良"],
        [8, 78, 55, 80, 1.29, 59, 29, "良"],
        [9, 267, 216, 280, 4.8, 108, 64, "重度污染"],
        [10, 185, 127, 216, 2.52, 61, 27, "中度污染"],
        [11, 39, 19, 38, 0.57, 31, 15, "优"],
        [12, 41, 11, 40, 0.43, 21, 7, "优"],
        [13, 64, 38, 74, 1.04, 46, 22, "良"],
        [14, 108, 79, 120, 1.7, 75, 41, "轻度污染"],
        [15, 108, 63, 116, 1.48, 44, 26, "轻度污染"],
        [16, 33, 6, 29, 0.34, 13, 5, "优"],
        [17, 94, 66, 110, 1.54, 62, 31, "良"],
        [18, 186, 142, 192, 3.88, 93, 79, "中度污染"],
        [19, 57, 31, 54, 0.96, 32, 14, "良"],
        [20, 22, 8, 17, 0.48, 23, 10, "优"],
        [21, 39, 15, 36, 0.61, 29, 13, "优"],
        [22, 94, 69, 114, 2.08, 73, 39, "良"],
        [23, 99, 73, 110, 2.43, 76, 48, "良"],
        [24, 31, 12, 30, 0.5, 32, 16, "优"],
        [25, 42, 27, 43, 1, 53, 22, "优"],
        [26, 154, 117, 157, 3.05, 92, 58, "中度污染"],
        [27, 234, 185, 230, 4.09, 123, 69, "重度污染"],
        [28, 160, 120, 186, 2.77, 91, 50, "中度污染"],
        [29, 134, 96, 165, 2.76, 83, 41, "轻度污染"],
        [30, 52, 24, 60, 1.03, 50, 21, "良"],
        [31, 46, 5, 49, 0.28, 10, 6, "优"]
      ];

      let dataGZ = [
        [1, 26, 37, 27, 1.163, 27, 13, "优"],
        [2, 85, 62, 71, 1.195, 60, 8, "良"],
        [3, 78, 38, 74, 1.363, 37, 7, "良"],
        [4, 21, 21, 36, 0.634, 40, 9, "优"],
        [5, 41, 42, 46, 0.915, 81, 13, "优"],
        [6, 56, 52, 69, 1.067, 92, 16, "良"],
        [7, 64, 30, 28, 0.924, 51, 2, "良"],
        [8, 55, 48, 74, 1.236, 75, 26, "良"],
        [9, 76, 85, 113, 1.237, 114, 27, "良"],
        [10, 91, 81, 104, 1.041, 56, 40, "良"],
        [11, 84, 39, 60, 0.964, 25, 11, "良"],
        [12, 64, 51, 101, 0.862, 58, 23, "良"],
        [13, 70, 69, 120, 1.198, 65, 36, "良"],
        [14, 77, 105, 178, 2.549, 64, 16, "良"],
        [15, 109, 68, 87, 0.996, 74, 29, "轻度污染"],
        [16, 73, 68, 97, 0.905, 51, 34, "良"],
        [17, 54, 27, 47, 0.592, 53, 12, "良"],
        [18, 51, 61, 97, 0.811, 65, 19, "良"],
        [19, 91, 71, 121, 1.374, 43, 18, "良"],
        [20, 73, 102, 182, 2.787, 44, 19, "良"],
        [21, 73, 50, 76, 0.717, 31, 20, "良"],
        [22, 84, 94, 140, 2.238, 68, 18, "良"],
        [23, 93, 77, 104, 1.165, 53, 7, "良"],
        [24, 99, 130, 227, 3.97, 55, 15, "良"],
        [25, 146, 84, 139, 1.094, 40, 17, "轻度污染"],
        [26, 113, 108, 137, 1.481, 48, 15, "轻度污染"],
        [27, 81, 48, 62, 1.619, 26, 3, "良"],
        [28, 56, 48, 68, 1.336, 37, 9, "良"],
        [29, 82, 92, 174, 3.29, 0, 13, "良"],
        [30, 106, 116, 188, 3.628, 101, 16, "轻度污染"],
        [31, 118, 50, 0, 1.383, 76, 11, "轻度污染"]
      ];

      let dataSH = [
        [1, 91, 45, 125, 0.82, 34, 23, "良"],
        [2, 65, 27, 78, 0.86, 45, 29, "良"],
        [3, 83, 60, 84, 1.09, 73, 27, "良"],
        [4, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
        [5, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
        [6, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
        [7, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
        [8, 89, 65, 78, 0.86, 51, 26, "良"],
        [9, 53, 33, 47, 0.64, 50, 17, "良"],
        [10, 80, 55, 80, 1.01, 75, 24, "良"],
        [11, 117, 81, 124, 1.03, 45, 24, "轻度污染"],
        [12, 99, 71, 142, 1.1, 62, 42, "良"],
        [13, 95, 69, 130, 1.28, 74, 50, "良"],
        [14, 116, 87, 131, 1.47, 84, 40, "轻度污染"],
        [15, 108, 80, 121, 1.3, 85, 37, "轻度污染"],
        [16, 134, 83, 167, 1.16, 57, 43, "轻度污染"],
        [17, 79, 43, 107, 1.05, 59, 37, "良"],
        [18, 71, 46, 89, 0.86, 64, 25, "良"],
        [19, 97, 71, 113, 1.17, 88, 31, "良"],
        [20, 84, 57, 91, 0.85, 55, 31, "良"],
        [21, 87, 63, 101, 0.9, 56, 41, "良"],
        [22, 104, 77, 119, 1.09, 73, 48, "轻度污染"],
        [23, 87, 62, 100, 1, 72, 28, "良"],
        [24, 168, 128, 172, 1.49, 97, 56, "中度污染"],
        [25, 65, 45, 51, 0.74, 39, 17, "良"],
        [26, 39, 24, 38, 0.61, 47, 17, "优"],
        [27, 39, 24, 39, 0.59, 50, 19, "优"],
        [28, 93, 68, 96, 1.05, 79, 29, "良"],
        [29, 188, 143, 197, 1.66, 99, 51, "中度污染"],
        [30, 174, 131, 174, 1.55, 108, 50, "中度污染"],
        [31, 187, 143, 201, 1.39, 89, 53, "中度污染"]
      ];

      let schema = [
        { name: "date", index: 0, text: "日" },
        { name: "AQIindex", index: 1, text: "AQI指数" },
        { name: "PM25", index: 2, text: "PM2.5" },
        { name: "PM10", index: 3, text: "PM10" },
        { name: "CO", index: 4, text: "一氧化碳（CO）" },
        { name: "NO2", index: 5, text: "二氧化氮（NO2）" },
        { name: "SO2", index: 6, text: "二氧化硫（SO2）" }
      ];
      let itemStyle = {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: "rgba(0, 0, 0, 0.5)"
      };
      const option = {
        color: ["#dd4444", "#fec42c", "#80F1BE"],
        legend: {
          top: 10,
          data: ["北京", "上海", "广州"]
        },
        grid: {
          left: "10%",
          right: 50,
          top: "18%",
          bottom: "10%"
        },
        tooltip: {
          padding: 10,
          backgroundColor: "#222",
          borderColor: "#777",
          borderWidth: 1,
          formatter: function(obj) {
            var value = obj.value;
            return (
              '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
              obj.seriesName +
              " " +
              value[0] +
              "日：" +
              value[7] +
              "</div>" +
              schema[1].text +
              "：" +
              value[1] +
              "<br>" +
              schema[2].text +
              "：" +
              value[2] +
              "<br>" +
              schema[3].text +
              "：" +
              value[3] +
              "<br>" +
              schema[4].text +
              "：" +
              value[4] +
              "<br>" +
              schema[5].text +
              "：" +
              value[5] +
              "<br>" +
              schema[6].text +
              "：" +
              value[6] +
              "<br>"
            );
          }
        },
        xAxis: {
          type: "value",
          name: "日期",
          nameGap: 16,
          nameTextStyle: {
            color: "#fff",
            fontSize: 14
          },
          max: 31
        },
        yAxis: {
          type: "value",
          name: "AQI指数",
          nameLocation: "end",
          nameGap: 20
        },
        // visualMap: [
        //   {
        //     left: "right",
        //     top: "10%",
        //     dimension: 2,
        //     min: 0,
        //     max: 250,
        //     itemWidth: 30,
        //     itemHeight: 120,
        //     calculable: true,
        //     precision: 0.1,
        //     text: ["圆形大小：PM2.5"],
        //     textGap: 30,
        //     textStyle: {
        //       color: "#fff"
        //     },
        //     inRange: {
        //       symbolSize: [10, 70]
        //     },
        //     outOfRange: {
        //       symbolSize: [10, 70],
        //       color: ["rgba(255,255,255,.2)"]
        //     },
        //     controller: {
        //       inRange: {
        //         color: ["#c23531"]
        //       },
        //       outOfRange: {
        //         color: ["#444"]
        //       }
        //     }
        //   },
        //   {
        //     left: "right",
        //     bottom: "5%",
        //     dimension: 6,
        //     min: 0,
        //     max: 50,
        //     itemHeight: 120,

        //     precision: 0.1,
        //     text: ["明暗：二氧化硫"],
        //     textGap: 30,
        //     textStyle: {
        //       color: "#fff"
        //     },
        //     inRange: {
        //       colorLightness: [1, 0.5]
        //     },
        //     outOfRange: {
        //       color: ["rgba(255,255,255,.2)"]
        //     },
        //     controller: {
        //       inRange: {
        //         color: ["#c23531"]
        //       },
        //       outOfRange: {
        //         color: ["#444"]
        //       }
        //     }
        //   }
        // ],
        series: [
          {
            name: "北京",
            type: "scatter",
            itemStyle: itemStyle,
            data: dataBJ
          },
          {
            name: "上海",
            type: "scatter",
            itemStyle: itemStyle,
            data: dataSH
          },
          {
            name: "广州",
            type: "scatter",
            itemStyle: itemStyle,
            data: dataGZ
          }
        ]
      };
      myChart.setOption(option);
    },
    drawChartsankey(id) {
      const myChart = this.$echarts.init(document.getElementById(id));
      const option = {
        title: {
          left: "center"
        },
        backgroundColor: "#FFFFFF",
        series: [
          {
            type: "sankey",
            left: 50.0,
            top: 20.0,
            right: 150.0,
            bottom: 25.0,
            data: [
              {
                name: "Werne",
                itemStyle: {
                  normal: {
                    color: "#f18bbf",
                    borderColor: "#f18bbf"
                  }
                }
              },
              {
                name: "Duesseldorf",
                itemStyle: {
                  normal: {
                    color: "#0078D7",
                    borderColor: "#0078D7"
                  }
                }
              },

              {
                name: "Morangis",
                itemStyle: {
                  normal: {
                    color: "#8E562E",
                    borderColor: "#8E562E"
                  }
                }
              },

              {
                name: "Offenbach",
                itemStyle: {
                  normal: {
                    color: "#C17529",
                    borderColor: "#C17529"
                  }
                }
              },
              {
                name: "Warrington",
                itemStyle: {
                  normal: {
                    color: "#CEC597",
                    borderColor: "#CEC597"
                  }
                }
              },

              {
                name: "Hannover",
                itemStyle: {
                  normal: {
                    color: "#C3986D",
                    borderColor: "#C3986D"
                  }
                }
              },
              {
                name: "Roncq",
                itemStyle: {
                  normal: {
                    color: "#4D291C",
                    borderColor: "#4D291C"
                  }
                }
              },

              {
                name: "Lebanon",
                itemStyle: {
                  normal: {
                    color: "#4F82BE",
                    borderColor: "#4F82BE"
                  }
                }
              },
              {
                name: "Maidenhead",
                itemStyle: {
                  normal: {
                    color: "#D38017",
                    borderColor: "#D38017"
                  }
                }
              },
              {
                name: "Stoke-on-Trent",
                itemStyle: {
                  normal: {
                    color: "#A8CDD7",
                    borderColor: "#A8CDD7"
                  }
                }
              },

              {
                name: "Versailles",
                itemStyle: {
                  normal: {
                    color: "#84AA33",
                    borderColor: "#84AA33"
                  }
                }
              },
              {
                name: "Neunkirchen",
                itemStyle: {
                  normal: {
                    color: "#ff8b67",
                    borderColor: "#ff8b67"
                  }
                }
              },
              {
                name: "Vista",
                itemStyle: {
                  normal: {
                    color: "rgba(106,82,134,255)",
                    borderColor: "rgba(106,82,134,255)"
                  }
                }
              },
              {
                name: "Westminster",
                itemStyle: {
                  normal: {
                    color: "#1B587C",
                    borderColor: "#1B587C"
                  }
                }
              },

              {
                name: "Oak Bay",
                itemStyle: {
                  normal: {
                    color: "#4BADC7",
                    borderColor: "#4BADC7"
                  }
                }
              },
              {
                name: "Milton Keynes",
                itemStyle: {
                  normal: {
                    color: "#BA144C",
                    borderColor: "#BA144C"
                  }
                }
              },
              {
                name: "Eilenburg",
                itemStyle: {
                  normal: {
                    color: "#F0A22E",
                    borderColor: "#F0A22E"
                  }
                }
              },
              {
                name: "ColonialVoice",
                itemStyle: {
                  normal: {
                    color: "rgba(64,105,157,255)",
                    borderColor: "rgba(64,105,157,255)"
                  }
                }
              },

              {
                name: "Paris La Defense",
                itemStyle: {
                  normal: {
                    color: "#989391",
                    borderColor: "#989391"
                  }
                }
              },
              {
                name: "Villeneuve-d'Ascq",
                itemStyle: {
                  normal: {
                    color: "#886CE4",
                    borderColor: "#886CE4"
                  }
                }
              },

              {
                name: "Salzgitter",
                itemStyle: {
                  normal: {
                    color: "#87a0c7",
                    borderColor: "#87a0c7"
                  }
                }
              },
              {
                name: "Woolston",
                itemStyle: {
                  normal: {
                    color: "#FFE2C5",
                    borderColor: "#FFE2C5"
                  }
                }
              },

              {
                name: "High Wycombe",
                itemStyle: {
                  normal: {
                    color: "#F07F09",
                    borderColor: "#F07F09"
                  }
                }
              },
              {
                name: "Stuttgart",
                itemStyle: {
                  normal: {
                    color: "#E3008C",
                    borderColor: "#E3008C"
                  }
                }
              },
              {
                name: "Sooke",
                itemStyle: {
                  normal: {
                    color: "#4E8542",
                    borderColor: "#4E8542"
                  }
                }
              },

              {
                name: "Saint Ouen",
                itemStyle: {
                  normal: {
                    color: "#744DA9",
                    borderColor: "#744DA9"
                  }
                }
              },
              {
                name: "Watford",
                itemStyle: {
                  normal: {
                    color: "#E8B7B7",
                    borderColor: "#E8B7B7"
                  }
                }
              },
              {
                name: "GBP",
                itemStyle: {
                  normal: {
                    color: "#C32D2E",
                    borderColor: "#C32D2E"
                  }
                }
              },
              {
                name: "Paderborn",
                itemStyle: {
                  normal: {
                    color: "#F0C42E",
                    borderColor: "#F0C42E"
                  }
                }
              },
              {
                name: "Dunkerque",
                itemStyle: {
                  normal: {
                    color: "#881798",
                    borderColor: "#881798"
                  }
                }
              },

              {
                name: "Lancaster",
                itemStyle: {
                  normal: {
                    color: "#D34817",
                    borderColor: "#D34817"
                  }
                }
              },
              {
                name: "DEM",
                itemStyle: {
                  normal: {
                    color: "#4E342E",
                    borderColor: "#4E342E"
                  }
                }
              },
              {
                name: "Grevenbroich",
                itemStyle: {
                  normal: {
                    color: "#FFA836",
                    borderColor: "#FFA836"
                  }
                }
              },

              {
                name: "Reading",
                itemStyle: {
                  normal: {
                    color: "#72A376",
                    borderColor: "#72A376"
                  }
                }
              },
              {
                name: "Pantin",
                itemStyle: {
                  normal: {
                    color: "#69797E",
                    borderColor: "#69797E"
                  }
                }
              },
              {
                name: "Kassel",
                itemStyle: {
                  normal: {
                    color: "#e65e20",
                    borderColor: "#e65e20"
                  }
                }
              },

              {
                name: "Cergy",
                itemStyle: {
                  normal: {
                    color: "#B4009E",
                    borderColor: "#B4009E"
                  }
                }
              },
              {
                name: "Paris",
                itemStyle: {
                  normal: {
                    color: "#666666",
                    borderColor: "#666666"
                  }
                }
              }
            ],
            links: [
              {
                source: "FRF",
                target: "Colomiers",
                value: 357.8399963378906
              },
              {
                source: "SuperiorCard",
                target: "FRF",
                value: 894.5999908447266
              },
              {
                source: "DEM",
                target: "München",
                value: 178.9199981689453
              },

              {
                source: "DEM",
                target: "Offenbach",
                value: 357.8399963378906
              },
              {
                source: "FRF",
                target: "Villeneuve-d'Ascq",
                value: 178.9199981689453
              },
              {
                source: "FRF",
                target: "Dunkerque",
                value: 357.8399963378906
              },
              {
                source: "DEM",
                target: "Eilenburg",
                value: 178.9199981689453
              },
              {
                source: "FRF",
                target: "Paris",
                value: 1073.5199890136719
              },
              {
                source: "GBP",
                target: "Maidenhead",
                value: 549.8400026857853
              },
              {
                source: "CAD",
                target: "Sooke",
                value: 1764.499989286065
              },
              {
                source: "CAD",
                target: "Vancouver",
                value: 1528.580000281334
              },
              {
                source: "DEM",
                target: "Hamburg",
                value: 357.8399963378906
              },
              {
                source: "GBP",
                target: "London",
                value: 8619.309983983636
              },
              {
                source: "CAD",
                target: "Oak Bay",
                value: 1565.109990529716
              },
              {
                source: "Distinguish",
                target: "FRF",
                value: 2683.7999725341797
              },
              {
                source: "DEM",
                target: "Neunkirchen",
                value: 178.9199981689453
              },
              {
                source: "FRF",
                target: "Cergy",
                value: 178.9199981689453
              },

              {
                source: "GBP",
                target: "Orly",
                value: 0.5899999737739563
              },
              {
                source: "SuperiorCard",
                target: "DEM",
                value: 1431.3599853515625
              },
              {
                source: "Vista",
                target: "CAD",
                value: 5369.929964579642
              },
              {
                source: "GBP",
                target: "Paris",
                value: 0.6399999856948853
              },
              {
                source: "GBP",
                target: "Liverpool",
                value: 857.1999968588352
              },
              {
                source: "GBP",
                target: "Stoke-on-Trent",
                value: 1131.7099939212203
              },
              {
                source: "Distinguish",
                target: "DEM",
                value: 2504.8799743652344
              },
              {
                source: "CAD",
                target: "Langford",
                value: 2343.4599857851863
              },
              {
                source: "DEM",
                target: "Kassel",
                value: 536.7599945068359
              },
              {
                source: "GBP",
                target: "High Wycombe",
                value: 216.83999809622765
              },
              {
                source: "CAD",
                target: "Port Hammond",
                value: 1711.1399984136224
              },
              {
                source: "DEM",
                target: "Duesseldorf",
                value: 178.9199981689453
              },
              {
                source: "GBP",
                target: "Gloucestershire",
                value: 422.28999888151884
              },
              {
                source: "Distinguish",
                target: "GBP",
                value: 10384.949975416064
              },
              {
                source: "FRF",
                target: "Roissy en Brie",
                value: 178.9199981689453
              },
              {
                source: "GBP",
                target: "West Sussex",
                value: 592.1700052022934
              },
              {
                source: "CAD",
                target: "Cliffside",
                value: 2906.2699892893434
              },
              {
                source: "GBP",
                target: "Newcastle upon Tyne",
                value: 1448.2899911925197
              },
              {
                source: "GBP",
                target: "Runcorn",
                value: 1120.4800013303757
              },
              {
                source: "GBP",
                target: "W. York",
                value: 612.1199932694435
              },
              {
                source: "DEM",
                target: "Kiel",
                value: 178.9199981689453
              },
              {
                source: "GBP",
                target: "Woolston",
                value: 833.3199937939644
              },
              {
                source: "Distinguish",
                target: "CAD",
                value: 6950.059956334531
              },
              {
                source: "DEM",
                target: "Frankfurt",
                value: 715.6799926757812
              },
              {
                source: "CAD",
                target: "Colma",
                value: 0.2199999988079071
              },
              {
                source: "DEM",
                target: "Essen",
                value: 178.9199981689453
              },
              {
                source: "FRF",
                target: "Chatou",
                value: 178.9199981689453
              },
              {
                source: "GBP",
                target: "Cheltenham",
                value: 573.0499979257584
              },
              {
                source: "SuperiorCard",
                target: "GBP",
                value: 8228.39999615401
              },
              {
                source: "CAD",
                target: "Haney",
                value: 2310.4499812424183
              },
              {
                source: "FRF",
                target: "Saint Ouen",
                value: 178.9199981689453
              },
              {
                source: "CAD",
                target: "Chalk Riber",
                value: 0.9200000166893005
              },
              {
                source: "DEM",
                target: "Salzgitter",
                value: 178.9199981689453
              },
              {
                source: "ColonialVoice",
                target: "FRF",
                value: 1610.2799835205078
              },
              {
                source: "DEM",
                target: "Stuttgart",
                value: 357.8399963378906
              },
              {
                source: "FRF",
                target: "Saint-Denis",
                value: 178.9199981689453
              },
              {
                source: "CAD",
                target: "Royal Oak",
                value: 2128.459992274642
              },
              {
                source: "FRF",
                target: "Les Ulis",
                value: 715.6799926757812
              },
              {
                source: "FRF",
                target: "Drancy",
                value: 178.9199981689453
              },
              {
                source: "GBP",
                target: "Esher-Molesey",
                value: 911.4700058028102
              },
              {
                source: "SuperiorCard",
                target: "CAD",
                value: 7388.099954992533
              },
              {
                source: "GBP",
                target: "Bury",
                value: 903.9400005489588
              },
              {
                source: "GBP",
                target: "Watford",
                value: 1326.5300009772182
              },
              {
                source: "CAD",
                target: "Victoria",
                value: 827.3899968340993
              },
              {
                source: "DEM",
                target: "Saarbrücken",
                value: 178.9199981689453
              },
              {
                source: "GBP",
                target: "Lancaster",
                value: 685.6899967193604
              },
              {
                source: "FRF",
                target: "Pantin",
                value: 178.9199981689453
              },
              {
                source: "CAD",
                target: "Newton",
                value: 1781.909985654056
              },
              {
                source: "GBP",
                target: "Oxon",
                value: 493.6499986946583
              },
              {
                source: "CAD",
                target: "Calgary",
                value: 361.3899962902069
              },
              {
                source: "DEM",
                target: "Münster",
                value: 715.6799926757812
              },
              {
                source: "DEM",
                target: "Grevenbroich",
                value: 536.7599945068359
              },
              {
                source: "DEM",
                target: "Paderborn",
                value: 357.8399963378906
              },
              {
                source: "GBP",
                target: "York",
                value: 3172.9999914616346
              },
              {
                source: "CAD",
                target: "Metchosin",
                value: 1750.7899813987315
              },
              {
                source: "FRF",
                target: "Suresnes",
                value: 357.8399963378906
              },
              {
                source: "FRF",
                target: "Versailles",
                value: 894.5999908447266
              },
              {
                source: "DEM",
                target: "Erlangen",
                value: 536.7599945068359
              },
              {
                source: "CAD",
                target: "Lebanon",
                value: 0.8700000047683716
              },
              {
                source: "GBP",
                target: "Wokingham",
                value: 812.6600027084351
              },
              {
                source: "GBP",
                target: "Cambridge",
                value: 500.36999743431807
              },
              {
                source: "ColonialVoice",
                target: "GBP",
                value: 8040.7799860313535
              },
              {
                source: "FRF",
                target: "Saint Germain en Laye",
                value: 178.9199981689453
              },
              {
                source: "FRF",
                target: "Metz",
                value: 178.9199981689453
              },
              {
                source: "FRF",
                target: "Orleans",
                value: 357.8399963378906
              },
              {
                source: "GBP",
                target: "Milton Keynes",
                value: 1648.2200061008334
              },
              {
                source: "GBP",
                target: "Warrington",
                value: 2162.8300000429153
              },
              {
                source: "CAD",
                target: "N. Vancouver",
                value: 1862.4599857926369
              },
              {
                source: "DEM",
                target: "Hannover",
                value: 178.9199981689453
              },
              {
                source: "Vista",
                target: "GBP",
                value: 9497.539981640875
              },
              {
                source: "DEM",
                target: "Werne",
                value: 178.9199981689453
              },
              {
                source: "ColonialVoice",
                target: "DEM",
                value: 1789.1999816894531
              },
              {
                source: "ColonialVoice",
                target: "CAD",
                value: 7907.36997512728
              },
              {
                source: "GBP",
                target: "Gateshead",
                value: 1425.7099913656712
              },
              {
                source: "Vista",
                target: "DEM",
                value: 1968.1199798583984
              }
            ],
            lineStyle: {
              color: "source",
              curveness: 0.5
            },
            itemStyle: {
              color: "#1f77b4",
              borderColor: "#1f77b4"
            },
            label: {
              color: "rgba(0,0,0,0.7)",
              fontFamily: "Arial",
              fontSize: 10
            }
          }
        ],
        tooltip: {
          trigger: "item"
        }
      };
      myChart.setOption(option);
    }
  }
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
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 1500px;
    .cardStyle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 600px;
      height: 330px;
      margin: 20px;
      box-shadow: 2px 2px 8px rgba(232, 237, 246, 1);
      .pic {
        width: 300px;
        height: 300px;
      }
    }

    .text {
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
}
</style>
