import zh from './zh'
import en from './en'
//语言
import {
  createI18n
} from 'vue-i18n' //引入vue-i18n组件
// import { 引入的组件 export 出来的 变量} from 'vue-i18n'
//注册i8n实例并引入语言文件
const i18n = createI18n({
  locale: 'zh', //默认显示的语言 
  messages: {
    zh, //引入语言文件
    en
  }
})

// $i18n.locale = 'ch'
// https://vue-i18n.intlify.dev/guide/essentials/scope.html#local-scope-1

export default i18n; //将i18n暴露出去，在main.js中引入挂载
