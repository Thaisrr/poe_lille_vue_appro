import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Users from "@/components/Users";
import MyFirstComponent from "@/components/MyFirstComponent";
import UserDetails from "@/components/UserDetails";
import UserForm from "@/components/UserForm";

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/home', name: 'home', component: HelloWorld},
  {path: '/users', name: 'users', component: Users},
  {path: '/first', name: 'first', component: MyFirstComponent},
  {path: '/first', name: 'first', component: MyFirstComponent},
  {path: '/add', name: 'add', component: UserForm},
  {path: '/user-detail', name: 'user-detail', component: UserDetails},
  {path: '/', redirect: '/home'}
];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
