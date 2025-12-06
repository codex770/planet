<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-image"
                                :style="`background: url(${$store.state.serverPath}/img/planet.jpg)`" alt="image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form v-on:submit.prevent="onSubmit">
                                        <div class="form-group mb-2">
                                            <input type="email" v-model="user.email"
                                                class="form-control form-control-user"
                                                placeholder="Enter Email Address..." />
                                            <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                        </div>
                                        <div class="form-group mb-2">
                                            <input type="password" v-model="user.password"
                                                class="form-control form-control-user" placeholder="Password" />
                                            <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-6">
                                                <div class="custom-control custom-checkbox small ">
                                                    <input type="checkbox" v-model="user.rememberMe"
                                                        class="custom-control-input" id="rememberMe" />
                                                    <label class="custom-control-label pt-1" for="rememberMe">Remember
                                                        Me</label>
                                                </div>
                                            </div>

                                            <div class="col-6">
                                                <div class="text-center">
                                                    <!-- <router-link to="/reset-password-request" class="small"
                                                        style="1px solid #9E9E9E ">Forgot Password?</router-link> -->
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" ref="btnSubmit"
                                            class="btn btn-primary btn-user btn-block">
                                            Login
                                        </button>
                                    </form>
                                    <hr />

                                    <div class="text-center">
                                        <router-link to="/register" class="small">Create an Account ! Sign up
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as auth from "../../services/auth_service";
    export default {
        name: "Login",
        data() {
            return {
                user: {
                    email: "",
                    password: "",
                    remember_me: false
                },
                errors: {},
            };
        },
        mounted() {

        },
        methods: {
            onSubmit: async function () {
                try {
                    const response = await auth.login(this.user);
    
                    if (response.data.user.role === 'superAdmin') {
                        this.$router.push('/superAdmin');
                    }
                    if (response.data.user.role === 'admin') {
                        this.$router.push('/admin');
                    }
                    if (response.data.user.role === 'user') {
                        this.$router.push('/user');
                    }
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.errors = {};
                            this.flashMessage.info({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        default:
                            this.errors = {};
                            this.flashMessage.error({
                                message: "Some error occurred please try again",
                                time: 5000
                            });
                            break;
                    }
                }
            },
        }
    }

</script>
