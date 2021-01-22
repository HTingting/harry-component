<template>
  <div id="app">
<!--   业务代码测试 -->
  <my-test></my-test>
<!--    <el-button @click="openNotice">打开notice</el-button>
    <div class="tree-area">
      <el-tree
          :data="data"
          :props="defaultProps"
          icon-class="my_icon_url"
          accordion
          @node-click="handleNodeClick">
         <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)">
            点我
          </el-button>
        </span>
      </span>
      </el-tree>
      <div style="box-sizing:border-box;padding:10px;width:100%;height:1px;background:black;"></div>
      &lt;!&ndash;   render content   &ndash;&gt;
      <el-tree
          :data="data"
          :props="defaultProps"
          accordion
          :render-content="renderContent"
          @node-click="handleNodeClick">
      </el-tree>

      <div style="box-sizing:border-box;padding:10px;width:100%;height:1px;background:black;"></div>

      &lt;!&ndash;     自己的树组件 &ndash;&gt;
      <my-tree :treeData="treeData"></my-tree>

      <div style="box-sizing:border-box;padding:10px;width:100%;height:1px;background:black;"></div>
      &lt;!&ndash;      自己的手风琴组件&ndash;&gt;
      <my-collapse :activeName="activeName">
        <my-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </my-collapse-item>
        <my-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </my-collapse-item>
        <my-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </my-collapse-item>
        <my-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </my-collapse-item>
      </my-collapse>
    </div>-->

  </div>
</template>

<script>
/*import myTree from './components/tree/Tree'
import myCollapse from './components/collapse/Collapse'
import myCollapseItem from './components/collapse/CollapseItem'*/
import myTest from './pages/test/Test'

export default {
  name: 'App',
  components: {
    myTest,
  },
  data() {
    return {
      activeName:[1],
      treeData: {
        label: 'WEB系统',
        children: [
          {
            label: '三大框架',
            children: [
              {label: 'Vue'},
              {label: 'React'},
              {label: 'Angular'}
            ]
          },
          {
            label: '打包构建工具',
            children: [
              {label: 'gulp'},
              {label: 'grunt'},
              {label: 'webpack'}
            ]
          }
        ]
      },
      iconUrl: '',
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    openNotice() {
      this.$notice({
        title: 'Hello Harry',
        message: "You'd done a great job! "
      })
    },
    handleNodeClick(data) {
      console.log(data);
    },
    renderContent() {
      var createElement = arguments[0];
      var level = arguments[1].node.level;
      console.log('获取', level);
      if (level == 1) {
        return createElement('span', [
          createElement('i', {attrs: {class: 'el-icon-yx-folder'}}),
          createElement('span', "     "),
          createElement('span', arguments[1].node.label + arguments[1].node.level)
        ]);
      } else {
        return createElement('span', [
          createElement('i', {attrs: {class: 'el-icon-yx-file-text'}}),
          createElement('span', "     "),
          createElement('span', arguments[1].node.label)
        ]);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.my_icon_url {
  order: 100;
  background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F08%2F27%2F2157c19bc81caef.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613821502&t=aa7d841721588ee7c001f3dd8273342e') no-repeat 12px 12px;
}
</style>
