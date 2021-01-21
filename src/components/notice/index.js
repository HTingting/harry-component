import Vue from 'vue';
import Notice from './Notice'

const NoticeContructor = Vue.extend(Notice);
export default function notice( options ){
    //1.实例化
    const instance = new NoticeContructor({
        data:options
    });
    //2. 手动挂载
    instance.$mount();
    //3. 手动挂载到body
    document.body.appendChild(instance.$el);
}