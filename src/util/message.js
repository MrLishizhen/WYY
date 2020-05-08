import Vue from 'vue';
import message from '../components/message';

const Message = Vue.extend(message);
function MessageFun(title,date=3000){
    let vlo = document.getElementsByClassName('message-box')[0];
    if(vlo){
       vlo.parentNode.removeChild(vlo);
    }
    let div = 'div';
    // div.setAttribute('class','message-wai');
    const MessageObj = new Message({
        el:document.createElement(div),
        data(){
            return{
                title:title,
                show:true,
            }
        }
    });
    document.body.appendChild(MessageObj.$el);
    setTimeout(()=>{MessageObj.show=false},date);
}

function registryToast(){
    Vue.prototype.$message=MessageFun;
}
export default registryToast;
