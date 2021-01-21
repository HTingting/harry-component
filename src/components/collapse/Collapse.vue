<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "collapse",
  props:{
    activeName:{
      type:Array,
      default:function(){
        return [];
      }
    }
  },
  //提供给子组件
  provide(){
    return {
      collapse: this
    }
  },
  mounted(){
    this.$on('item-click',(name)=>{
      console.log('父组件接收',name);
       const index = this.activeName.indexOf(Number(name));
       if(index > -1){
         this.activeName.splice(index,1);
       }else{
         this.activeName.push(Number(name));
       }
    })
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>