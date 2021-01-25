<template>
  <div>
    <!--搜索栏-->
    <div class="search-bar clearfix">
      <el-form class="search-from clearfix" label-width="100px" ref="searchForm" :model="searchForm">
        <el-row>
          <el-col :span="8" class="search-item-fif">
            <el-form-item label="搜索关键字" class="search-input">
              <el-input @keyup.native.enter="searchTableData" v-model="searchForm.keyword" placeholder="请输入申报流水号/ 事项名称等关键字">
                <i class="el-icon-error el-input__icon"
                   slot="suffix"
                   style="cursor: pointer"
                   v-show="searchForm.keyword!=''"
                   @click="searchForm.keyword='';searchTableData()">
                </i>
                <el-button class="search-btn" slot="append" icon="el-icon-search" @click="searchTableData">查询</el-button>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-row>
                <el-col :span="12">
                  <el-form-item label="开始时间">
                    <el-date-picker type="datetime" placeholder="选择日期" v-model="searchForm.startTime"
                                    style="width: 100%;" @change="searchTableData"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="办结时间">
                    <el-date-picker type="datetime" placeholder="选择日期" v-model="searchForm.endTime"
                                    style="width: 100%;" @change="searchTableData"></el-date-picker>
                  </el-form-item>
                </el-col>
            </el-row>

          </el-col>
<!--          <el-col :span="4">

          </el-col>-->
          <el-col :span="4">
            <el-form-item label="状态" label-width="50px">
              <el-radio-group v-model="searchForm.status"  @change="searchTableData">
                <el-radio label="">全部</el-radio>
                <el-radio label="0">正常</el-radio>
                <el-radio label="1">逾期</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <div>
              <a class="el-button el-button--primary el-button--medium" href="javascript:;" @click.prevent="exportExcel">导出</a>
              <a class="el-button el-button--primary el-button--medium" href="javascript:;" @click.prevent="refreshExcel">刷新</a>
            </div>
          </el-col>
        </el-row>

      </el-form>
    </div>
    <el-collapse v-model="activestartTime" accordion>
      <el-collapse-item title="一致性 Consistency" name="1">
        <template slot="title">
          <div class="time-rule-item time-rule-item-normal">
            <div class="col col-1">
              <div class="bold">申报流水号  202101160901291</div>
              <div><em class="tag level-1">申报时效</em> <span>竣工验收阶段</span></div>
            </div>
            <div class="col">
              <div>开始时间：2021-1-16 12:00</div>
              <div>办结时间：-</div>
            </div>
            <div class="col">
              <div>承诺办理时间：20（工作日）</div>
              <div>承诺办结时间：2021-03-20 12:00</div>
            </div>
            <div class="col">
              <div>已用时间：10工作日3小时</div>
              <div>剩余时间：9工作日4小时</div>
            </div>
            <div class="col col-btn">
              <span @click="editNode()">修改</span><span style="color:#DCDFE6;padding:0px;">|</span><span>刷新</span>
            </div>
          </div>
        </template>
        <el-table
            class="time-rule-table"
            :data="tableData"
            style="width: 100%;margin-bottom: 20px;"
            row-key="id"
            border
            default-expand-all
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          <el-table-column
              prop="nodeName"
              label="事项/环节名称"
              width="250">
            <template slot-scope="scope">
              <span class="tag level-2">事项时限</span><span>{{scope.row.nodeName}}</span>
            </template>
          </el-table-column>
          <el-table-column
              prop="startTime"
              label="开始时间">
          </el-table-column>
          <el-table-column
              prop="bjTime"
              label="办结时间">
          </el-table-column>
          <el-table-column
              prop="applyTime"
              label="承诺时限">
            <template slot-scope="scope">
              <span>{{scope.row.applyTime}} </span><span style="color:#AFB2C1;">(工作日)</span>
            </template>
          </el-table-column>
          <el-table-column
              prop="applyBjTime"
              label="承诺办结时间">
          </el-table-column>
          <el-table-column
              prop="usedTime"
              label="已用时间">
          </el-table-column>
          <el-table-column
              prop="surplusTime"
              label="剩余时间">
            <template slot-scope="scope">
              <div class="surplus-time timeout">{{scope.row.surplusTime}}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div class="col col-btn">
                <span @click="editNode(scope.row)">修改</span><span style="color:#DCDFE6;padding:0px;">|</span><span @click="refreshNode(scope.row)">刷新</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
      <el-collapse-item title="承诺时限" name="2">
        <template slot="title">
          <div class="time-rule-item time-rule-item-innormal">我是title</div>
        </template>
      </el-collapse-item>
      <el-collapse-item title="承诺办结时间" name="3"></el-collapse-item>
    </el-collapse>
     <!-- 修改时限对话框 -->
    <el-dialog width="600px" title="收货地址" :visible.sync="editDialogVisible">
      <template slot="title">
        <div class="dialog-title">修改承诺时限</div>
      </template>
      <!--   提示   -->
      <div class="tips-box">
        <i class="tips-icon"></i>
        <p>请修改承诺时限后再点击 <em style="color:#FF8915;">【确定】</em>，修改时限后，【承诺办结时间】、【剩余时间】
        会同步刷新。请谨慎操作。</p>
      </div>
      <!--  表单    -->
      <el-form :model="ruleForm" ref="ruleForm" label-width="80px" class="form">
        <el-form-item label="承诺时限" prop="name" >
          <el-input-number
                :rules="{ required: true, message: '请设置适当的时限', trigger: 'blur' }"
                v-model="ruleForm.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  startTime: "est",
  data(){
    return {
      searchForm:{
        keyword: '',
        startTime: '',
        endTime: '',
        status: '',
      },
      activestartTime:'1',
      tableData: [
          {
        id: 1,
        nodeName: '2016-05-02',
        startTime: '2021-01-16 12:00',
        bjTime: '20',
        applyTime:'',
        applyBjTime:'2021-03-20 12:00',
        usedTime:'10工作日3小时',
        surplusTime:'剩余2工作日3小时',
        children: [{
          id: 2,
          nodeName: '2016-05-01',
          startTime: '2021-01-16 12:00',
          bjTime: '20',
          applyTime:'',
          applyBjTime:'2021-03-20 12:00',
          usedTime:'10工作日3小时',
          surplusTime:'剩余2工作日3小时',
        }, {
          id: 3,
          nodeName: '2016-05-01',
          startTime: '2021-01-16 12:00',
          bjTime: '20',
          applyTime:'',
          applyBjTime:'2021-03-20 12:00',
          usedTime:'10工作日3小时',
          surplusTime:'剩余2工作日3小时',
        }]
      }, {
        id: 4,
        nodeName: '2016-05-04',
        startTime: '2021-01-16 12:00',
        bjTime: '上海市普陀区金沙江路 1517 弄',
        applyTime:'',
        applyBjTime:'2021-03-20 12:00',
        usedTime:'10工作日3小时',
        surplusTime:'剩余2工作日3小时',
      }, {
        id: 5,
        nodeName: '2016-05-01',
        startTime: '2021-01-16 12:00',
        bjTime: '20',
        applyTime:'',
        applyBjTime:'2021-03-20 12:00',
        usedTime:'10工作日3小时',
        surplusTime:'剩余2工作日3小时',
        children: [{
          id: 6,
          nodeName: '2016-05-01',
          startTime: '2021-01-16 12:00',
          bjTime: '20',
          applyTime:'',
          applyBjTime:'2021-03-20 12:00',
          usedTime:'10工作日3小时',
          surplusTime:'剩余2工作日3小时',
        }, {
          id: 7,
          nodeName: '2016-05-01',
          startTime: '2021-01-16 12:00',
          bjTime: '20',
          applyTime:'',
          applyBjTime:'2021-03-20 12:00',
          usedTime:'10工作日3小时',
          surplusTime:'剩余2工作日3小时',
        }]
      }, {
        id: 8,
        nodeName: '2016-05-03',
        startTime: '2021-01-16 12:00',
        bjTime: '上海市普陀区金沙江路 1516 弄',
        applyTime:'',
        applyBjTime:'2021-03-20 12:00',
        usedTime:'10工作日3小时',
        surplusTime:'剩余2工作日3小时',
      }],
      editDialogVisible:false,
      ruleForm:{
        num:1
      },
      currentEditNodeId:'',
    }
  },
  mounted(){
    //获取节点数据
  },
  methods:{
    searchTableData(){
      //获取时间戳
      console.log(this.searchForm.startTime.getTime());
      console.log(JSON.stringify(this.searchForm));
    },
    exportExcel(){

    },
    /**
     * 刷新，整个页面刷新即可
     */
    refreshExcel(){
      //
    },
    /**
     * 编辑时长
     * @param row
     */
    editNode(row){
      console.log(row);
      this.editDialogVisible = true;
      this.currentEditNodeId = row.id;
    },
    refreshNode(row){
      console.log(row);
    },
    /**
     * 时限修改监听
     */
    handleChange(){

    }
  }
}
</script>

<style scoped>
/deep/.el-collapse-item__header{
  line-height:inherit;
  height:auto;
  background:#F3F6F9;
}
/deep/.el-collapse-item__header .el-icon-arrow-right:before {
  content: "";
  width: 27px;
  height: 27px;
  display: block;
  background: url("./../../../src/assets/images/unexpend.png") no-repeat center;
  background-size: 27px 27px;
}
/deep/.el-collapse-item__content{
  padding:15px 15px 0 15px !important;
}
/*搜索栏*/
.search-bar{
  overflow:hidden;
  position:relative;
}
/deep/.search-input .el-input__inner{
  width:260px;
}
/deep/.el-radio{
  margin-right:15px;
}
/deep/.el-input-group__append{
  background-color: #169AFF !important;
  color:#fff !important;
  border:1px solid #169AFF;
  padding:0 13px !important;
}
.search-btns{
  position:absolute;
  right:0;
  bottom:30px;
}
.search-btns a{
  /*width:48px;height:23px;*/
}

.time-rule-item{
  width:100%;
  height:79px;
  display:flex;
  justify-content: space-around;
  align-items:center;

}
.time-rule-item .col{
  text-align:left;
}
.time-rule-item .col>div:first-child{
  height:20px;
}
.time-rule-item .col-1{
  padding-left:33px;
}
.col-btn{
  /*line-height:79px;*/
  color:#169AFF;font-size:14px;
}
.col-btn span{
  display: inline-block;
  padding-left:10px;padding-right:10px;
  height:16px;
  font-size:14px;
}
.col-btn span:nth-child(2){
  cursor: inherit;
}
.col-btn span:hover{
  cursor: pointer;
}
.time-rule-item .bold{
  font-weight:600;
  font-size:16px;
}
.tag{
  border-radius:2px;
  padding:3px 4px;
  text-align:center;
  font-size:14px;
  color:#fff;
  margin-right:10px;
}
.level-1{
  background:#FFB822;
}
.level-2{
  background: #26BD7F;
}
.level-3{
  background: #4EB2FD;
}
.time-rule-item-normal{
  border-left:6px solid #B8C8DC;
}
.time-rule-item-innormal{
  border-left:6px solid #FF4B47;
}

.time-rule-table{
}
/deep/.el-table th{
  background-color: #F3F6F9 !important;
}
/deep/.el-table th>.cell{
  color: #575962;
  font-weight: 700;
}
.surplus-time{
  width:130px;height:28px;
  text-align: center;
  line-height:28px;
  color:#169AFF;
  font-size:14px;
  border:1px solid #4EB2FD;
  box-sizing: border-box;
}
.timeout{
  color:#FF4B47;
  font-size:14px;
  border:1px solid #FF7A77;
}
/deep/.el-icon-arrow-right{
  border: 5px solid transparent;
  width: 0;
  height: 0;
  border-left-color: #575962;
}
/deep/.el-icon-arrow-right:before{
  content:'';
}
/deep/.el-table td, .el-table th{
  padding:10px 0;
}
/deep/.el-table .cell{
  max-height:80px;
  overflow: hidden;
}

/*对话框样式*/
/deep/.el-dialog__header{
  background-color:#169AFF;
  color:#fff;
  padding:15px 20px;
}
/deep/.el-icon-close:before {
  content: "\e6db";
  color: white;
}
.dialog-title{
  text-align:left;
}
.tips-box{
  height:64px;
  padding:14px 16px;
  box-sizing: border-box;
  background:#fffaf1;
  border:1px solid #FFC58C;
  line-height:20px;
  text-align:left;
  display:flex;
  align-content: center;
  margin-bottom:10px;
}
.tips-icon{
  display:block;
  width:30px;height:20px;
  background: url("./../../../src/assets/images/info.png") no-repeat center;
  background-size: 20px 20px;
  vertical-align: middle;
  margin-right:10px;
}

/deep/.el-dialog__body{
  padding:10px 12px;
  background: #E7E9F3;
}
.form{
  height:120px;
  background:#fff;
  line-height:120px;
  padding-top:42px;
  box-sizing: border-box;
  padding-left:152px;
}
/deep/.el-form-item__content{
  width:100px;
}
.search-from .el-input__inner{
  height:37px;line-height:37px;
}

</style>