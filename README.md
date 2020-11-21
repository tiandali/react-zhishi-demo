# 项目启动前提(运行环境准备)

    第一步： 安装node.js并且版本大于12.xx,配置环境变量，进入我的电脑，右击属性->高级系统设置->高级tab下面的环境变量，找到 path，将 node 的安装路径添加到其中，点击确定。
    第二步： 执行命令检查 node 版本：node -v
    第三步：执行命令检查 node 版本：npm -v

# 项目启动

安装完成后执行命令：npm run dev

## 系统名称标题路由更改

路由：src/router/index.js
菜单上面的系统名称:src\layout\components\Sidebar\Logo.vue
首页系统标题名称 src\views\Home\index.vue

## 数据修改

战略目标定义模块的树图数据，目标编辑的数据在 src/view/Strategy/treeData,
体系概览的数据在 src/view/Strategy/treeDataOver,

能力目标体系和战略目标定义相同,目标编辑的数据在 src/view/Ability/treeData,
体系概览的数据在 src/view/Strategy/treeDataOver,

能力目标分析模块：数据在 src/view/AbilityAnalysis/data.js,文字名称更改在 src/view/AbilityAnalysis/index.vue,主要就是表头文字
匹配矩阵的数据:自上而下分别是：targetOptions，option,options,tableData;
目标匹配重复度数据:tableDatas

项目匹配分析：src/view/ProjectAnalysis/index.vue 文件
数据：src/view/ProjectAnalysis/data.js
项目数据：下拉框数据是 options,option,targetOptions，
匹配度评价数据： tableData,
能力贡献度评价：数据在 index.vue 中，

项目投资组合分析的数据都在 src/view/CombinationAnalysis/index.vue 中
