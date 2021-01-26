<template>
    <div>
        <p>---------------son-------------</p>
        <p>coo:{{ coo }}</p>
        <button @click="attrUpRocket">我要发射火箭</button>
        <p>---------------son--------------</p>
    </div>
</template>

<script>
/**
 * 可以看到可以通过father组件v-bind 绑定 $attrs 属性传递给son组件
 * son组件通过props接受到coo属性了
 *
 * 以上是 grandfather-> father -> son 向下传值
 * 那怎么 son -> father -> grandfather 传递数据呢？
 *
 * father 通过使用 v-on 监听 $listeners 传递
 * 最终，grandfather 接收到 son 组件的事件了。
 */
export default {
    name: "son",
    props: ['coo'],
    methods: {
        attrUpRocket(){
            console.log('我要发射火箭了');
            this.$emit('upRocket');
        }
    }
}
</script>

<style scoped>

</style>