import { createRouter, createWebHistory} from 'vue-router'

import * as url from '../stores/url-config';

//import store from '../stores/store';

import axios from 'axios';

import user from './user'

const routes = [...user,];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach( (to, from, next) =>{
//     console.log(store.state.user.token);
//     if(to.matched[0].name == 'admin-router'){
//         if(to.matched.some((record) => record.meta.requiresAuth)){
//             if(store.state.admin.token == null){
//                 next({
//                     name: 'login-admin'
//                 });
//             }else{
//                 next();
//             }
//         }else if(to.name == 'login-user' || to.name == 'register-user' || to.name == 'login-admin'){
//             if(store.state.admin.token != null){
//                 next({
//                     name: from.name,
//                 });
//             }else{
//                 next();
//             }
//         }else{
//             next();
//         }
//     }else{
//         if( (to.name !== 'login-user' || to.name !== 'register-user' || to.name !== 'login-admin') && to.matched.some((record) => record.meta.requiresAuth)){
//             if(store.state.user.token == null){
//                 next({
//                     name: 'login-user'
//                 });
//             }else{
//                 next();
//             }
//         }else if(to.name == 'login-user' || to.name == 'register-user' || to.name == 'login-admin'){
//             if(store.state.user.token != null){
//                 next({
//                     name: from.name,
//                 });
//             }else{
//                 next();
//             }
//         }else{
//             next();
//         }
//     }
// })


export default router;