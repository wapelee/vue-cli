
import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import Hello from "@/components/Hi";
// import Hi from "@/components/Hi";
import Hi1 from "@/components/Hi1";
import Hi2 from "@/components/Hi2";
import Params from "@/components/params";
import Error from "@/components/Error";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //配置路由，这里是个数组
    // {
    //   //每一个链接都是一个对象
    //   path: "/", //链接路径
    //   name: "HelloWorld", //路由名称，
    //   component: HelloWorld //对应的组件模板
    // },
    // {
    //   path: "/hi",
    //   name: "hi",
    //   component: Hi,
    //   children: [
    //     { path: "/", component: Hi },
    //     { path: "hi1", name: "hi1", component: Hi1 },
    //     { path: "hi2", component: Hi2 }
    //   ]
    // }
    {
      path: "/",
      components: {
        default: Hello,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: "/Hi",
      components: {
        default: Hello,
        left: Hi2,
        right: Hi1
      },
      alias: "/jspang"
    },
    {
      path: "/news/:newsId(\\d+)/:newsTitle",
      component: Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了news模板');
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path: "/goback",
      redirect: "/"
    },
    {
      path: "/go/:newsId(\\d+)/:newsTitle",
      redirect: "/news/:newsId(\\d+)/:newsTitle"
    },
    {
      path: "*",
      component: Error
    }
  ]
});
