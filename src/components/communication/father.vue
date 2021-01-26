<template>
    <div>
        <p>----------father-------------</p>
        <p>attrs:{{$attrs}}</p>
        <p>foo:{{foo}}</p>
        <p>-----------father-------------</p>
        <son v-bind="$attrs" v-on="$listeners"></son>
    </div>
</template>

<script>
/**
 * grandfather将foo和coo属性都放在了father上，
 * 但是father的props只接收了foo，
 * 因此，grandfather的coo属性显示在了father的根节点上。
 * 如何避免这个问题
 * ——可以通过设置inheritAttrs为false；
 *
 * 如果节点上隐藏了coo属性，那么怎么获取的coo属性呢？
 * ——可以通过$attrs获取到coo
 */
import son from './son'
export default {
    name: "father",
    props: ["foo"],
    components:{son}
}
</script>

<style scoped>

</style>