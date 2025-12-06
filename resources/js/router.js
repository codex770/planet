import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome';
import * as auth from './services/auth_service';
import store from './store';

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Welcome,
        children: [
            {
                path: '',
                name: 'welcome',
                component: () => import ('./views/Home.vue'),
            },
        ],
        beforeEnter(to, from, next) {
            if (auth.isLoggedIn()) {
                if (auth.getUserRole() === 'superAdmin') {
                    next('/superAdmin');
                }
                if (auth.getUserRole() === 'admin') {
                    next('/admin');
                }
                if (auth.getUserRole() === 'user') {
                    next('/user');
                }
            } else {
                next('/login');
            }
        }
    },
    
    {
        path: '/login',
        name: 'Login',
        component: () => import ('./views/authentication/Login.vue'),
        beforeEnter(to, from, next) {
            if (auth.isLoggedIn()) {
                if (auth.getUserRole() === 'superAdmin') {
                    next('/superAdmin');
                }
                if (auth.getUserRole() === 'admin') {
                    next('/admin');
                }
                if (auth.getUserRole() === 'user') {
                    next('/user');
                }
            } else {
                next();
            }
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import ('./views/authentication/Register.vue'),
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import ('./views/authentication/ResetPassword.vue'),
        beforeEnter(to, from, next) {
            if (auth.isLoggedIn()) {
                if (auth.getUserRole() === 'superAdmin') {
                    next('dashboard/superAdmin');
                }
                if (auth.getUserRole() === 'admin') {
                    next('dashboard/admin');
                }
                if (auth.getUserRole() === 'user') {
                    next('dashboard/user');
                }
            } else {
                next();
            }
        }
    },
    {
        path: '/reset-password-request',
        name: 'reset-password-request',
        component: () => import ('./views/authentication/ResetPasswordRequest.vue'),
        beforeEnter(to, from, next) {
            if (auth.isLoggedIn()) {
                if (auth.getUserRole() === 'superAdmin') {
                    next('dashboard/superAdmin');
                }
                if (auth.getUserRole() === 'admin') {
                    next('dashboard/admin');
                }
                if (auth.getUserRole() === 'user') {
                    next('dashboard/user');
                }
            } else {
                next();
            }
        }
    },
    {
        path: '/superAdmin',
        component: () => import ('./views/Home.vue'),
        children: [
            {
                path: '',
                name: 'super-admin-dashboard',
                component: () => import ('./views/dashboard/SuperAdmin/Dashboard.vue'),
            },
            {
                path:   'user-managment',
                name:   'user-managment',
                component:  ()  => import('./views/dashboard/SuperAdmin/UserManagment.vue')
            },
            {
                path:   'setting',
                name:   'setting',
                component:  ()  => import('./views/dashboard/SuperAdmin/Setting.vue')
            },
            {
                path:   'planet/:name',
                name:   'planet',
                component:  ()  => import('./views/dashboard/SuperAdmin/Planet.vue')
            },
            // {
            //     path:   'planet/:name',
            //     name:   'mercury',
            //     component:  ()  => import('./views/dashboard/SuperAdmin/Mercury.vue')
            // },
            {
                path:   'venus', 
                name:   'venus',
                component:  ()  => import('./views/dashboard/SuperAdmin/Venus.vue')
            },
            {
                path:   'earth',
                name:   'earth',
                component:  ()  => import('./views/dashboard/SuperAdmin/Earth.vue')
            },
            {
                path:   'jupiter',
                name:   'jupiter',
                component:  ()  => import('./views/dashboard/SuperAdmin/Jupiter.vue')
            },
            {
                path:   'uranus',
                name:   'uranus',
                component:  ()  => import('./views/dashboard/SuperAdmin/Uranus.vue')
            },
            {
                path:   'saturn',
                name:   'saturn',
                component:  ()  => import('./views/dashboard/SuperAdmin/Saturn.vue')
            },
            {
                path:   'neptune',
                name:   'neptune',
                component:  ()  => import('./views/dashboard/SuperAdmin/Neptune.vue')
            },
            {
                path:   'contact',
                name:   'contact',
                component:  ()  => import('./views/dashboard/SuperAdmin/Contact.vue')
            },
            {
                path:   'about',
                name:   'about',
                component:  ()  => import('./views/dashboard/SuperAdmin/About.vue')
            },
        ],
        beforeEnter(to, from, next) {
            if (auth.isLoggedIn()) {
                next();
            } else {
                next('/login');
            }
        }
    },
    {
        path: '/admin',
        component: () => import ('./views/Home.vue'),
        children: [
            {
                path: '',
                name: 'admin-dashboard',
                component: () => import ('./views/dashboard/Admin/Dashboard.vue'),
            },
            {
                path:   'planet/:name',
                name:   'planet',
                component:  ()  => import('./views/dashboard/SuperAdmin/Planet.vue')
            },
        ],
        beforeEnter(to, from, next) {
            if (auth.isLoggedIn()) {
                next();
            } else {
                next('/login');
            }
        }
    },
    {
        path: '/user',
        component: () => import ('./views/Home.vue'),
        children: [
            {
                path: '',
                name: 'user-dashboard',
                component: () => import ('./views/dashboard/User/Dashboard.vue'),
            },
            {
                path:   'planet/:name',
                name:   'planet',
                component:  ()  => import('./views/dashboard/SuperAdmin/Planet.vue')
            },
        ],
        beforeEnter(to, from, next) {
            if (auth.isLoggedIn()) {
                next();
            } else {
                next('/login');
            }
        }
    },
];
const router = new Router({
    base: '/dashboard',
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active',
});

router.beforeResolve((to, from, next) => {
    store.state.isLoading = true;
    next();
});

router.afterEach((to, from) => {
    store.state.isLoading = false;
});

export default router;
