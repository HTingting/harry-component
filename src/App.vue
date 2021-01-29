<template>
  <div id="app">
    <!--        <grand-father></grand-father>-->
<!--    <my-search-form :formOptions="formOptions" @onSearch="onSearch"></my-search-form>-->
    <test-form></test-form>
    <!--   业务代码测试 -->
    <!--        <my-test></my-test>
            <el-button @click="openNotice">打开notice</el-button>
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
                <my-collapse :activeName="activeName" :accordion="false">
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
import myCollapseItem from './components/collapse/CollapseItem'
import myTest from './pages/test/Test'*/
/*import grandFather from './components/communication/grandFather'*/
/*import mySearchForm from './components/searchTool/SearchForm'*/
import testForm from './pages/testForm/testForm';

export default {
  name: 'App',
  components: {
    /*myTree,
    myCollapse,
    myCollapseItem,
    myTest,*/
    /* grandFather,*/
   /* mySearchForm,*/
    testForm
  },
  data() {
    return {
      activeName: [1],
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
      data: [
        {
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
      },
      formOptions: [
        {
          label: '用户名', // label文字
          prop: 'username', // 字段名
          element: 'el-input', // 指定elementui组件
          initValue: '阿黄', // 字段初始值
          placeholder: '请选择级联选项', // elementui组件属性
          rules: [{required: true, message: '必填项', trigger: 'blur'}], // elementui组件属性
          slot:'<el-button slot="append" icon="el-icon-search"></el-button>',
          events: { // elementui组件方法
            input(val) {
              console.log(val)
            },
          }
        },
          //级联的配置
        {
          label: '状态', // label文字
          prop: 'status', // 字段名
          element: 'el-cascader', // 指定elementui组件
          initValue: '阿黄', // 字段初始值
          placeholder: '请输入用户名', // elementui组件属性
          //rules: [{required: true, message: '必填项', trigger: 'blur'}], // elementui组件属性
          events: { // elementui组件方法
            input(val) {
              console.log(val)
            },
          },
          //设置
          options: [
              {
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }, {
              value: 'data',
              label: 'Data',
              children: [{
                value: 'table',
                label: 'Table 表格'
              }, {
                value: 'tag',
                label: 'Tag 标签'
              }, {
                value: 'progress',
                label: 'Progress 进度条'
              }, {
                value: 'tree',
                label: 'Tree 树形控件'
              }, {
                value: 'pagination',
                label: 'Pagination 分页'
              }, {
                value: 'badge',
                label: 'Badge 标记'
              }]
            }, {
              value: 'notice',
              label: 'Notice',
              children: [{
                value: 'alert',
                label: 'Alert 警告'
              }, {
                value: 'loading',
                label: 'Loading 加载'
              }, {
                value: 'message',
                label: 'Message 消息提示'
              }, {
                value: 'message-box',
                label: 'MessageBox 弹框'
              }, {
                value: 'notification',
                label: 'Notification 通知'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }, {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              }, {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              }, {
                value: 'steps',
                label: 'Steps 步骤条'
              }]
            }, {
              value: 'others',
              label: 'Others',
              children: [{
                value: 'dialog',
                label: 'Dialog 对话框'
              }, {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              }, {
                value: 'popover',
                label: 'Popover 弹出框'
              }, {
                value: 'card',
                label: 'Card 卡片'
              }, {
                value: 'carousel',
                label: 'Carousel 走马灯'
              }, {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }]
            }]
          }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
              value: 'axure',
              label: 'Axure Components'
            }, {
              value: 'sketch',
              label: 'Sketch Templates'
            }, {
              value: 'jiaohu',
              label: '组件交互文档'
            }]
          }]
        },
          //select的配置
        {
          label: '用户名', // label文字
          prop: 'food', // 字段名
          element: 'el-select', // 指定elementui组件
          initValue: '阿黄', // 字段初始值
          placeholder: '请选择下拉选项', // elementui组件属性
          //rules: [{required: true, message: '必填项', trigger: 'blur'}], // elementui组件属性
          events: { // elementui组件方法
            input(val) {
              console.log(val)
            },
          },
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
        },
          //时间选择器
        {
          label: '时间选择器', // label文字
          prop: 'startTime', // 字段名
          element: 'el-date-picker', // 指定elementui组件
          type:'monthrange',
          initValue: '阿黄', // 字段初始值
          placeholder: '请选择开始时间', // elementui组件属性
          //rules: [{required: true, message: '必填项', trigger: 'blur'}], // elementui组件属性
          events: { // elementui组件方法
            input(val) {
              console.log(val)
            },
          }
        },
      ]
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
    },
    onSearch(data){
      console.log('搜索提交',data);
    }
  }
}
</script>

<style>

</style>
