<template>
  <div class="overviewMain">
    <div :id="id" :class="className" />
  </div>
</template>
<script>
import G6 from "@antv/g6";
import echarts from "echarts";
import { treeDataOver } from "./treeDataOver";

G6.registerNode(
  "tree-node",
  {
    drawShape: function drawShape(cfg, group) {
      const rect = group.addShape("rect", {
        attrs: {
          fill: "#fff",
          stroke: "#666"
        },
        name: "rect-shape"
      });
      const content = cfg.name.replace(/(.{19})/g, "$1\n");
      const text = group.addShape("text", {
        attrs: {
          text: content,
          x: 0,
          y: 0,
          textAlign: "left",
          textBaseline: "middle",
          fill: "#666"
        },
        name: "rect-shape"
      });
      const bbox = text.getBBox();
      const hasChildren = cfg.children && cfg.children.length > 0;
      if (hasChildren) {
        group.addShape("marker", {
          attrs: {
            x: bbox.maxX + 12,
            y: 0,
            r: 6,
            symbol: cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse,
            stroke: "#666",
            lineWidth: 2
          },
          name: "collapse-icon"
        });
      }
      rect.attr({
        x: bbox.minX - 4,
        y: bbox.minY - 6,
        width: bbox.width + (hasChildren ? 26 : 8),
        height: bbox.height + 12
      });
      return rect;
    }
  },
  "single-node"
);
export default {
  name: "Overview",
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "BarChart"
    },
    width: {
      type: String,
      default: "800px"
    },
    height: {
      type: String,
      default: "700px"
    }
  },
  data() {
    return {
      treeDataOver
    };
  },
  created() {},
  mounted() {
    this.initChart();
  },
  watch: {},
  methods: {
    initChart() {
      const data = {
        id: "xxxx系统建设规划目标",
        label: "xxxx系统建设规划目标",
        children: [
          {
            id: "xxxx基础设施",
            label: "xxxx基础设施",
            children: [
              {
                id: "xxxx骨干网基础设施",
                label: "xxxx骨干网基础设施"
              },
              {
                label: "xxxx指控网基础设施",
                id: "xxxx指控网基础设施"
              },
              {
                label: "xxxx数据中心",
                id: "xxxx数据中心"
              }
            ]
          },
          {
            label: "xxxx战略预警能力",
            id: "xxxx战略预警能力",
            children: [
              {
                label: "xxxx探测能力",
                id: "xxxx探测能力"
              },
              {
                label: "xxxx研判能力",
                id: "xxxx研判能力"
              }
            ]
          },
          {
            label: "xxxx安全对抗能力",
            id: "xxxx安全对抗能力",
            children: [
              {
                label: "xxxx抗毁能力",
                id: "xxxx抗毁能力"
              },
              {
                label: "xxxx冗余度",
                id: "xxxx冗余度"
              },
              {
                label: "xxxx容灾恢复",
                id: "xxxx容灾恢复"
              }
            ]
          },
          {
            label: "xxxx其他一级能力指标",
            id: "xxxx其他一级能力指标"
          }
        ]
      };

      G6.Util.traverseTree(data, d => {
        // d.leftIcon = {
        //   style: {
        //     fill: '#e6fffb',
        //     stroke: '#e6fffb',
        //   },
        //   img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ',
        // };
        return true;
      });

      G6.registerNode(
        "icon-node",
        {
          options: {
            size: [60, 20],
            stroke: "#91d5ff",
            fill: "#91d5ff"
          },
          draw(cfg, group) {
            const styles = this.getShapeStyle(cfg);
            const { labelCfg = {} } = cfg;

            const w = styles.width;
            const h = styles.height;

            const keyShape = group.addShape("rect", {
              attrs: {
                ...styles,
                x: -w / 2,
                y: -h / 2
              }
            });

            /**
             * leftIcon 格式如下：
             *  {
             *    style: ShapeStyle;
             *    img: ''
             *  }
             */
            // if (cfg.leftIcon) {
            //   const { style, img } = cfg.leftIcon;
            //   group.addShape("rect", {
            //     attrs: {
            //       x: 1 - w / 2,
            //       y: 1 - h / 2,
            //       width: 38,
            //       height: styles.height - 2,
            //       fill: "#8c8c8c",
            //       ...style
            //     }
            //   });

            // group.addShape('image', {
            //   attrs: {
            //     x: 8 - w / 2,
            //     y: 8 - h / 2,
            //     width: 24,
            //     height: 24,
            //     img:
            //       img ||
            //       'https://g.alicdn.com/cm-design/arms-trace/1.0.155/styles/armsTrace/images/TAIR.png',
            //   },
            //   name: 'image-shape',
            // });
            // }

            // 如果不需要动态增加或删除元素，则不需要 add 这两个 marker
            // group.addShape('marker', {
            //   attrs: {
            //     x: 40 - w / 2,
            //     y: 52 - h / 2,
            //     r: 6,
            //     stroke: '#73d13d',
            //     cursor: 'pointer',
            //     // symbol: EXPAND_ICON,
            //   },
            //   name: 'add-item',
            // });

            // group.addShape('marker', {
            //   attrs: {
            //     x: 80 - w / 2,
            //     y: 52 - h / 2,
            //     r: 6,
            //     stroke: '#ff4d4f',
            //     cursor: 'pointer',
            //     // symbol: COLLAPSE_ICON,
            //   },
            //   name: 'remove-item',
            // });

            if (cfg.label) {
              group.addShape("text", {
                attrs: {
                  ...labelCfg.style,
                  text: cfg.label,
                  x: 50 - 95,
                  y: 25 - 20
                }
              });
            }

            return keyShape;
          },
          update: undefined
        },
        "rect"
      );

      G6.registerEdge("flow-line", {
        draw(cfg, group) {
          const startPoint = cfg.startPoint;
          const endPoint = cfg.endPoint;

          const { style } = cfg;
          const shape = group.addShape("path", {
            attrs: {
              stroke: style.stroke,
              endArrow: style.endArrow,
              path: [
                ["M", startPoint.x, startPoint.y],
                ["L", startPoint.x, (startPoint.y + endPoint.y) / 2],
                ["L", endPoint.x, (startPoint.y + endPoint.y) / 2],
                ["L", endPoint.x, endPoint.y]
              ]
            }
          });

          return shape;
        }
      });
      this.chart = echarts.init(document.getElementById(this.id));
      const width = 1000;
      const height = 800;
      const defaultStateStyles = {
        hover: {
          stroke: "#1890ff",
          lineWidth: 2
        }
      };

      const defaultNodeStyle = {
        fill: "#91d5ff",
        stroke: "#40a9ff",
        radius: 5
      };

      const defaultEdgeStyle = {
        stroke: "#91d5ff",
        endArrow: {
          path: "M 0,0 L 12, 6 L 9,0 L 12, -6 Z",
          fill: "#91d5ff",
          d: -20
        }
      };

      const defaultLayout = {
        type: "compactBox",
        direction: "TB",
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 40;
        },
        getHGap: function getHGap() {
          return 70;
        }
      };

      const defaultLabelCfg = {
        style: {
          fill: "#000",
          fontSize: 12
        }
      };
      const graph = new G6.TreeGraph({
        container: "BarChart",
        width,
        height,
        linkCenter: true,
        modes: {
          default: ["drag-canvas", "zoom-canvas"]
        },
        defaultNode: {
          type: "icon-node",
          size: [120, 40],
          style: defaultNodeStyle,
          labelCfg: defaultLabelCfg
        },
        defaultEdge: {
          type: "flow-line",
          style: defaultEdgeStyle
        },
        nodeStateStyles: defaultStateStyles,
        edgeStateStyles: defaultStateStyles,
        layout: defaultLayout
      });

      graph.data(data);
      graph.render();
      graph.fitView();
      // const graph = new G6.TreeGraph({
      //   container: "BarChart",
      //   width,
      //   height,
      //   modes: {
      //     default: [
      //       {
      //         type: "collapse-expand",
      //         onChange: function onChange(item, collapsed) {
      //           const data = item.get("model");
      //           const icon = item
      //             .get("group")
      //             .find(element => element.get("name") === "collapse-icon");
      //           if (collapsed) {
      //             icon.attr("symbol", G6.Marker.expand);
      //           } else {
      //             icon.attr("symbol", G6.Marker.collapse);
      //           }
      //           data.collapsed = collapsed;
      //           return true;
      //         }
      //       },
      //       "drag-canvas",
      //       "zoom-canvas"
      //     ]
      //   },
      //   defaultNode: {
      //     type: "tree-node",
      //     anchorPoints: [
      //       [0, 0.5],
      //       [1, 0.5]
      //     ]
      //   },
      //   defaultEdge: {
      //     type: "cubic-horizontal",
      //     style: {
      //       stroke: "#A3B1BF"
      //     }
      //   },
      //   layout: {
      //     type: "compactBox",
      //     direction: "TB",
      //     getId: function getId(d) {
      //       return d.id;
      //     },
      //     getHeight: function getHeight() {
      //       return 16;
      //     },
      //     getWidth: function getWidth() {
      //       return 16;
      //     },
      //     getVGap: function getVGap() {
      //       return 20;
      //     },
      //     getHGap: function getHGap() {
      //       return 80;
      //     }
      //   }
      // });
      // console.log("data", this.chartdata);
      // G6.Util.traverseTree(this.chartdata, function(item) {
      //   item.id = item.name;
      // });
      // graph.data(this.chartdata);
      // graph.render();
      // graph.fitView();
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.overviewMain {
}
</style>
