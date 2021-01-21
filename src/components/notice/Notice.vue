<template>
  <div>
    标题：{{ title }}
    内容： {{ message }}
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      title:'默认的标题',
      message:'默认的message',
    }
  }
}
</script>

<style scoped>

</style>