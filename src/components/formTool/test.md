/**
 * <h1>
 *     <a name=""hello-world" href="#hello-world">
 *         Hello World!
 *     </a>
 * </h1>
 */
```js
var getChildrenTextContent = function (children) {
    return children.map( function (node) {
            return node.children ? getChildrenTextContent(node.children) : node.text
        }).join('')
}
Vue.component('anchored-heading',{
    render: function (createElement){
        //创建kebab-case 风格的ID
        var headingId = getChildrenTextContent(this.$slot.default)
            .toLowerCase()
            .replace(/\W+/g,'-')
            .replace(/(^-|-$)/g,'')
        return createElement(
            //标签名称
            'h'  + this.level,
            //子节点数组
            [
                createElement( 'a' , {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        )
    },
    props:{
        level: {
            type: 'Number',
            required: true
        }
    }
})

/**
 * createElement接受的参数
 *  - 一个html标签名、组件选项对象，或者resolve了上述任何一种的一个async函数，必填项
 *  - 一个与模板中attribute对应的数据对象 可选项
 *  - （String | Array）子级虚拟节点（VNodes）,由`createElement()`构建而成，也可以使用自负床来生成’文本虚拟节点‘，可选
 */

 //如何保证node唯一
 render: function (createElement){
     return createElement(
         'div',
         Array.apply(null,{length:20}).map(function()=>{
             return createElement('p','hi')
     })
     )
 }
```