<template>
    <div>
        <ul v-if="$store.state.profile.role === 'superAdmin'"
            class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" 
           
            id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/superAdmin">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Planetenallee Super Admin</div>
            </router-link>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link class="nav-link" to="/superAdmin">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <div class="sidebar-heading">
                Planets List
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed"
                    data-toggle="collapse" 
                    data-target="#collapsePages"
                    aria-expanded="true" 
                    aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" 
                    class="collapse" aria-labelledby="headingPages">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <router-link class="collapse-item" to="/superAdmin/planet/sun">Sun</router-link>
                        <router-link class="collapse-item" to="/superAdmin/planet/mars">Mars</router-link>
                        <router-link class="collapse-item" to="/superAdmin/planet/mercury">Mercury</router-link>
                        <router-link class="collapse-item" to="/superAdmin/planet/venus">Venus</router-link>
                        <router-link class="collapse-item" to="/superAdmin/planet/earth">Earth</router-link>
                        <router-link class="collapse-item" to="/superAdmin/planet/jupiter">Jupiter</router-link>
                        <router-link class="collapse-item" to="/superAdmin/planet/uranus">Uranus</router-link>
                        <router-link class="collapse-item" to="/superAdmin/planet/saturn">Saturn</router-link>
                        <router-link class="collapse-item" to="/superAdmin/planet/neptune">Neptune</router-link>
                    </div>
                </div>
            </li>

            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Theme store
            </div>

            <li class="nav-item">
                <router-link to="/superAdmin/setting" class="nav-link">
                    <i class="fas fa-cogs"></i>
                    <span>General Setting</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/superAdmin/about" class="nav-link">
                    <i class="fas fa-users"></i>
                    <span>About Us</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/superAdmin/user-managment" class="nav-link">
                    <i class="fas fa-users"></i>
                    <span>User Management</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/superAdmin/contact" class="nav-link">
                    <i class="fas fa-id-card"></i>
                    <span>contact</span>
                </router-link>
            </li>

            <li class="nav-item">
                <a v-on:click.prevent="logout" class="nav-link cursor-pointer">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
            </li>
        </ul>

        <ul v-if="$store.state.profile.role === 'admin'"
            class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Planetenallee Admin</div>
            </router-link>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link class="nav-link" to="/admin">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>


            <!-- Divider -->
            <hr class="sidebar-divider">

            <div class="sidebar-heading">
                Planets List
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <router-link class="collapse-item" to="/admin/planet/sun">Sun</router-link>
                        <router-link class="collapse-item" to="/admin/planet/mercury">Mercury</router-link>
                        <router-link class="collapse-item" to="/admin/planet/sun">Sun</router-link>
                        <router-link class="collapse-item" to="/admin/planet/mars">Mars</router-link>
                        <router-link class="collapse-item" to="/admin/planet/venus">Venus</router-link>
                        <router-link class="collapse-item" to="/admin/planet/earth">Earth</router-link>
                        <router-link class="collapse-item" to="/admin/planet/jupiter">Jupiter</router-link>
                        <router-link class="collapse-item" to="/admin/planet/uranus">Uranus</router-link>
                        <router-link class="collapse-item" to="/admin/planet/saturn">Saturn</router-link>
                        <router-link class="collapse-item" to="/admin/planet/neptune">Neptune</router-link>
                    </div>
                </div>
            </li>

            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Theme store
            </div>

            <li class="nav-item">
                <router-link to="/superAdmin/about" class="nav-link">
                    <i class="fas fa-users"></i>
                    <span>About Us</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/superAdmin/contact" class="nav-link">
                    <i class="fas fa-id-card"></i>
                    <span>contact</span>
                </router-link>
            </li>

            <li class="nav-item">
                <a v-on:click.prevent="logout" class="nav-link cursor-pointer">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
            </li>
        </ul>

        <ul v-if="$store.state.profile.role === 'user'"
            class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/user">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Planetenallee User</div>
            </router-link>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link class="nav-link" to="/user">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>


            <!-- Divider -->
            <hr class="sidebar-divider">

            <div class="sidebar-heading">
                Planets List
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <router-link class="collapse-item" to="/user/planet/sun">Sun</router-link>
                        <router-link class="collapse-item" to="/user/planet/mercury">Mercury</router-link>
                        <router-link class="collapse-item" to="/user/planet/sun">Sun</router-link>
                        <router-link class="collapse-item" to="/user/planet/mars">Mars</router-link>
                        <router-link class="collapse-item" to="/user/planet/venus">Venus</router-link>
                        <router-link class="collapse-item" to="/user/planet/earth">Earth</router-link>
                        <router-link class="collapse-item" to="/user/planet/jupiter">Jupiter</router-link>
                        <router-link class="collapse-item" to="/user/planet/uranus">Uranus</router-link>
                        <router-link class="collapse-item" to="/user/planet/saturn">Saturn</router-link>
                        <router-link class="collapse-item" to="/user/planet/neptune">Neptune</router-link>
                    </div>
                </div>
            </li>

            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Theme store
            </div>

            <li class="nav-item">
                <a v-on:click.prevent="logout" class="nav-link cursor-pointer">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
            </li>

        </ul>

       
    </div>
</template>
<script>
import * as auth from "../services/auth_service";

export default {
    name: 'SideBar',
    components: {
       
    },
    data(){
        return{
            loaded: false
        }
    },
    methods: {
        logout: async function () {
            await auth.logout();
            this.$router.push("/login");
        },
       
    }
}
</script>
<style scoped>
.cursor-pointer {
    cursor: pointer;
}

</style>

