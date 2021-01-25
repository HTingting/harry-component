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
    },
    accordion:{
      type: Boolean,
      default: false,
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
      if(this.accordion){
        this.activeValue = [].concat(Number(name));
      }else{
        const index = this.activeValue.indexOf(Number(name));
        if(index > -1){
          this.activeValue.splice(index,1);
        }else{
          this.activeValue.push(Number(name));
        }
      }

    })
  },
  data(){
    return {
      activeValue:[].concat(this.activeName),
    }
  },
  watch:{
    activeName(value) {
      this.activeValue = [].concat(value);
    }
  }
}
</script>

<style scoped>

</style>