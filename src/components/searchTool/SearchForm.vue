<template>
    <div class="search-form-box">
        <el-form
            :model="formData" ref="formRef" :inline="true">
            <el-form-item v-for="(item ,index ) in formOptions"
                :key="newKeys[index]"
                :prop="item.prop"
                :label="item.label ? (item.label + ':') : ''"
                :rules="item.rules">
                <my-form-item v-model="formData[item.prop]" :itemOptions="item"></my-form-item>
            </el-form-item>
        </el-form>
        <!--        提交按钮-->
        <div class="btn-box">
            <el-button
                v-if="btnItems.includes('search')"
                size="mini"
                type="primary"
                class="btn-search"
                @click="onSearch"
            >搜索</el-button>
            <el-button
                v-if="btnItems.includes('export')"
                size="mini"
                type="primary"
                class="btn-export"
                @click="onExport"
            >导出</el-button>
            <el-button
                v-if="btnItems.includes('reset')"
                size="mini"
                type="primary"
                class="btn-reset"
                @click="onReset"
            >重置</el-button>
        </div>
    </div>
</template>

<script>
import myFormItem from './FormItem'
import createUniqueString from './../../utils/tools'
export default {
    name: "SearchForm",
    components: {
        myFormItem
    },
    props: {
        formOptions:{
            type: Array,
            required: true,
            default (){
                return []
            }
        },
        btnItems: {
            type: String,
            default (){
                return 'search'
            }
        }
    },
    computed:{
      newKeys() {
          //每个options赋值一个唯一的key值
          return this.formOptions.map( () => {
              return createUniqueString();
          })
      }
    },
    data() {
        return {
            formData: {}
        }
    },
    created() {
        this.addInitValue();
    },
    methods: {
        /**
         * 校验
         */
        onValidate(callback ){
            this.$refs.formRef.validate(valid=>{
                console.log(valid,this.formData);
                if(valid){
                    console.log('验证成功');
                    callback();
                }
            })
        },
        /**
         * 搜索
         */
        onSearch(){
            this.onValidate( () => {
                this.$emit('onSearch', this.formData);
            })
        },
        /**
         * 导出
         */
        onExport(){
            this.onValidate( () => {
                this.$emit('onExport', this.formData);
            })
        },
        /**
         * 重置
         */
        onReset(){
            this.$refs.formRef.resetField();
        },
        /**
         * 初始化formData的数据
         * {
         *     username:'阿黄',
         * }
         */
        addInitValue(){
            const obj = {}
            this.formOptions.forEach( v => {
                if( v.initValue !== undefined) {
                    obj[v.prop] = v.initValue
                }
            })
            console.log('form----data',JSON.stringify(obj));
            this.formData = obj;
        }
    }
}
</script>

<style scoped>

</style>