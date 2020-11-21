<template>
  <div class="overviewMain">
    <div :id="id" :class="className" />
  </div>
</template>
<script>
import G6 from "@antv/g6";
import echarts from "echarts";
import { treeDataOver } from "./treeDataOver";

export default {
  name: "Overview",
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "BarChart",
    },
  },
  data() {
    return {
      treeDataOver,
    };
  },
  created() {
    this.treeDataOver = treeDataOver;
  },
  mounted() {
    this.treeDataOver = treeDataOver;
    this.initChart();
  },
  watch: {},
  methods: {
    initChart() {
      const data = treeDataOver[0];
      G6.Util.traverseTree(data, (d) => {
        return true;
      });

      G6.registerNode(
        "icon-node",
        {
          options: {
            size: [60, 20],
            stroke: "#91d5ff",
            fill: "#91d5ff",
          },
          draw(cfg, group) {
            const styles = this.getShapeStyle(cfg);
            console.log("styles: ", styles);
            const { labelCfg = {} } = cfg;

            const w = styles.width;
            console.log("w: ", w);
            const h = styles.height;
            console.log("h: ", h);

            const keyShape = group.addShape("rect", {
              attrs: {
                ...styles,
                x: -w / 2,
                y: -h / 2,
              },
            });

            if (cfg.label) {
              group.addShape("text", {
                attrs: {
                  ...labelCfg.style,
                  text: cfg.label,
                  x: 50 - 100,
                  y: 25 - 20,
                },
              });
            }

            return keyShape;
          },
          update: undefined,
        },
        "rect"
      );

      G6.registerEdge("flow-line", {
        draw(cfg, group) {
          const startPoint = cfg.startPoint;
          console.log("startPoint: ", startPoint);
          const endPoint = cfg.endPoint;
          console.log("endPoint: ", endPoint);

          const { style } = cfg;
          const shape = group.addShape("path", {
            attrs: {
              stroke: style.stroke,
              endArrow: style.endArrow,
              path: [
                ["M", startPoint.x, startPoint.y],
                ["L", startPoint.x, (startPoint.y + endPoint.y) / 2],
                ["L", endPoint.x, (startPoint.y + endPoint.y) / 2],
                ["L", endPoint.x, endPoint.y],
              ],
            },
          });

          return shape;
        },
      });
      this.chart = echarts.init(document.getElementById(this.id));
      const width = 1400;
      const height = 800;
      const defaultStateStyles = {
        hover: {
          stroke: "#1890ff",
          lineWidth: 2,
        },
      };

      const defaultNodeStyle = {
        fill: "#fff",
        stroke: "#40a9ff",
        radius: 5,
      };

      const defaultEdgeStyle = {
        stroke: "#91d5ff",
        endArrow: {
          path: "M 0,0 L 12, 6 L 9,0 L 12, -6 Z",
          fill: "#91d5ff",
          d: -20,
        },
      };

      const defaultLayout = {
        type: "compactBox",
        direction: "TB",
        getId: function getId(d) {
          return d.id;
        },
        //控制上下间距
        getHeight: function getHeight() {
          return 100;
        },
        //控制左右间距
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 50;
        },
        getHGap: function getHGap() {
          return 100;
        },
      };

      const defaultLabelCfg = {
        style: {
          fill: "#000",
          fontSize: 12,
        },
      };
      const graph = new G6.TreeGraph({
        container: "BarChart",
        width,
        height,
        linkCenter: true,
        modes: {
          default: ["drag-canvas", "zoom-canvas"],
        },
        defaultNode: {
          type: "icon-node",
          size: [140, 50],
          style: defaultNodeStyle,
          labelCfg: defaultLabelCfg,
        },
        defaultEdge: {
          type: "flow-line",
          style: defaultEdgeStyle,
        },
        nodeStateStyles: defaultStateStyles,
        edgeStateStyles: defaultStateStyles,
        layout: defaultLayout,
      });

      graph.data(data);
      graph.render();
      graph.fitView();
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.overviewMain {
}
</style>
