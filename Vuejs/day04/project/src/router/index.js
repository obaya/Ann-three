import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginComponent from '../components/login/login.vue'
import StudentComponent from '../components/students/students.vue'

Vue.use(VueRouter);

var router = new VueRouter({
    routes : [
        {
            path:'/login',
            name: 'login',
            component : LoginComponent
        },
        {
            path: '/students',
            name: 'students',
            component: StudentComponent
        }
    ]
})

export default router;