<template>
    <div>
        <father :foo="foo" :coo="coo" v-on:upRocket="reciveRocket"></father>
    </div>
</template>

<script>
import father from './father'
export default {
    name: "grandfather",
    components:{
        father
    },
    data(){
        return {
            foo:'Hello Harry',
            coo:'Happy Birthday',
        }
    },
    methods:{
        reciveRocket(){
            console.log('火箭发射成功');
        }
    }
}
</script>

<style scoped>

</style>