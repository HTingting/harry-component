<template>
  <div>
    <div @click="toggle">
      {{ treeData.label }}
      <span v-if="isOpenFolder">[ {{ open ? '-' : '+' }} ]</span>
    </div>
    <!--递归组件-->
    <ul v-if="isOpenFolder && open">
      <Item v-for="data in treeData.children" :treeData="data" :key="data.label"></Item>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Item",  //name对递归组件是必须设置的。
  props: {
    treeData: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      open: false,
    }
  },
  computed:{
    isOpenFolder(){
      return this.treeData.children && this.treeData.children.length > 0;
    }
  },
  methods:{
    toggle(){
      if(this.isOpenFolder){
        this.open = !this.open;
      }

    }
  }
}
</script>

<style scoped>

</style>