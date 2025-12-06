<template>
    <div class="container-fluid">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">User Management</h1>
            <a href="#" v-on:click="showRegisterWindow"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-user-plus fa-sm text-white-50"></i> Add User</a>
        </div>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">list of User</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                                <td>
                                    <a v-on:click="deleteUser(user)" class="btn btn-danger btn-circle">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- /.container-fluid -->
        <div class="modal fade" id="addUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered  modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Create an Account!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <b-modal ref="registerWindow" size="lg" hide-footer title="Add User...">
                        <form v-on:submit.prevent="register" class="user">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-lg-10">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <p class="h4 text-gray-900 mb-4">User Will get Email with password</p>
                                            </div>
                                        
                                                <div class="form-group row">
                                                    <div class="col-sm-12 mb-3 mb-sm-0">
                                                        <input type="text" v-model="user.name" class="form-control"
                                                            id="exampleFirstName" placeholder="User Name">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" v-model="user.email" class="form-control"
                                                        id="exampleInputEmail" placeholder="Email Address">
                                                </div>
                                                <div class="form-group">
                                                    <select v-model="user.role" class="custom-select">
                                                        <option value="" disabled selected>Choose one role...</option>
                                                        <option value="admin">admin</option>
                                                        <option value="user">user</option>
                                                    </select>    
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                                        <input type="password" v-model="user.password" class="form-control"
                                                            id="exampleInputPassword" placeholder="Password">
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <input type="password" v-model="user.password_confirmation" class="form-control"
                                                            id="exampleRepeatPassword" placeholder="Repeat Password">
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <br>
                            </div>
                            <div class="modal-footer">
                                <button v-on:click="hideRegisterWindow" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" ref="btnSubmit">Add User</button>
                            </div>
                        </form>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as auth from "../../../services/auth_service";
    import * as settingService from '../../../services/setting_service';
    export default {
        name: "User-Managment",
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    role:'',
                    password: '',
                    password_confirmation: '',
                },
                users:[],
                errors: {}
            }
        },
        mounted(){
            this.loadUsers();
        },
        methods: {
            loadUsers: async function (){
                try {
                    const response = await settingService.loadUsers();
                    this.users = response.data;
                    console.log(this.users);
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured, please refresh!',
                        time: 5000
                    });
                } 
            },
            register: async function () {
                this.disableSubmission(this.$refs.btnSubmit);
                try {
                    const response = await auth.register(this.user);
                    this.loadUsers();
                    this.user = {
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                    };
                    this.hideRegisterWindow();
                    this.flashMessage.success({
                        message: 'User is registered successfuly!',
                        time: 5000
                    });
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        case 201:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'some error occured, Please try again!',
                                time: 5000
                            });
                            break;
                    }
                    this.enableSubmission(this.$refs.btnSubmit);
                }
            },
            showRegisterWindow(){
                this.$refs.registerWindow.show();
            },
            hideRegisterWindow(){
                this.$refs.registerWindow.hide();
            },
            deleteUser: async function (user) {
                if (!window.confirm(`Are you sure you want to delete ${user.name}`)) {
                    return;
                }
                try {
                    await settingService.deleteUser(user.id);
                    this.users = this.users.filter(obj => {
					return obj.id != user.id;
				});
				this.flashMessage.success({
					message: "User is deleted successfuly!",
					time: 5000
				});
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred please try a gain!",
                        time: 5000
                    });
                }
            },
            disableSubmission(btnSubmit) {
            btnSubmit.setAttribute('disabled', 'disabled');
            this.btnSubmitOldHtml = btnSubmit.innerHTML;
            btnSubmit.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait...';
            },
            enableSubmission(btnSubmit) {
                btnSubmit.removeAttribute('disabled');
                btnSubmit.innerHTML = this.btnSubmitOldHtml;
            },
        }
    };

</script>
