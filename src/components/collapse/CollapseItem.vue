<template>
  <div @click="handleHeaderClick">
    <div class="header">
      <slot name="title"></slot>
      <h3>{{ title }}</h3>
    </div>
    <div class="wrap" v-show="isShow">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "collapseItem",
  props:{
    title:{
      type: String
    },
    name:{
      type: [String,Number]
    }
  },
  data(){
    return {
    }
  },
  //子组件接收父组件的实例
  inject:['collapse'],
  computed:{
    isShow(){
      //通过parent这种做法有个弊端就是，如果collapseItem前面再插入一个div或者其他的标签包起来，那么this.$parent就获取不到对应的值了。
      //解决方法，通过inject，provide
      //console.log(this.$parent.activeName,this.name);
      //return this.$parent.activeName.indexOf(Number(this.name)) > -1;
      return this.collapse.activeValue.indexOf(Number(this.name)) > -1;
    }
  },
  methods:{
    handleHeaderClick(){
      console.log(this.name);
      this.collapse.$emit('item-click',this.name);
    }
  }
}
</script>

<style scoped>

</style>