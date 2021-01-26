<template>
    <div class="form-item">
        <!--输入框-->
        <el-input
            v-if="isInput"
            v-model="currentVal"
            v-bind="bindProps"
            v-on="bindEvents"
            size="mini">
        </el-input>
        <!--输入数字框-->
        <el-input-number
            v-if="isInputNumber"
            v-model="currentVal"
            v-bind="bindProps"
            v-on="bindEvents"
            :controls-position="itemOptions['controls-position'] || 'right'"
            size="mini"></el-input-number>
        <!--select选择框-->
        <el-select
            v-if="isSelect"
            v-model="currentVal"
            v-bind="bindProps"
            v-on="bindEvents"
            size="mini">
            <el-options v-for="item in itemOptions.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
            </el-options>
        </el-select>
        <!--时间选择器, datetimerange / daterange -->
<!--        <el-date-picker
            v-if="isDatePickerMonthRange"
            v-model="currentVal"
            v-bind="bindProps"
            v-on="bindEvents"
            type="monthrange"
            size="mini"></el-date-picker>
        &lt;!&ndash;时间选择器， monthrange &ndash;&gt;
        <el-date-picker
            v-if="isDatePickerMonthRange"
            v-model="currentVal"
            v-bind="bindProps"
            v-on="bindEvents"
            :type="itemOptions.type"
            size="mini"
            clearable>
        </el-date-picker>
        &lt;!&ndash;other&ndash;&gt;
        <el-date-picker
            v-if="isDatePickerOthers"
            v-model="currentVal"
            v-bind="bindProps"
            v-on="bindEvents"
            :type="itemOptions.type"
            size="mini"
            clearable></el-date-picker>-->
        <!--级联选择器-->
        <el-cascader
            v-if="isCascader"
            v-model="currentVal"
            v-bind="bindProps"
            v-on="bindEvents"
            size="mini"
            clearable>
        </el-cascader>
    </div>
</template>

<script>
import {} from '@/utils/tools'

export default {
    inheritAttrs: false,
    name: "FormItem",
    props: {
        itemOptions: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
        }
    },
    computed: {
        //双向绑定数据值
        currentVal:{
            get(){
                return this.value
            },
            set (val){
                this.$emit('input',val);
            }
        },
        //绑定属性
        bindProps () {
            let obj = { ...this.itemOptions }
            //移除冗余属性
            delete obj.label
            delete obj.prop
            delete obj.element
            delete obj.initValue
            delete obj.rules
            delete obj.events
            if(obj.element === 'el-select'){
                delete obj.options
            }
            return obj;
        },
        //绑定方法
        bindEvents () {
            return this.itemOptions.events || {}
        },
        //el-input
        isInput(){
            return this.itemOptions.element === 'el-input'
        },
        //el-input-number
        isInputNumber(){
            return this.itemOptions.element === 'el-input-number'
        },
        //el-select
        isSelect(){
            return this.itemOptions.element === 'el-select'
        },
        //el-date-picker

        //el-date-picker(type:monthrange)

        //el-date-picker(type: other)

        //el-cascader
        isCascader(){
            return this.itemOptions.element === 'el-cascader'
        }
    },

    methods: {}
}
</script>

<style scoped>

</style>