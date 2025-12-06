<template>
    <div class="w-100">
        <div class="container">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="ms_main_wrapper">
                        <div class="container multi-bg mt-50rem p-30px">
                            <div class="row">
                                <div class="col text-center">
                                    <img :src="`${$store.state.serverPath}/img/register.jpg`" alt=""
                                        class="form-image" />
                                </div>
                                <div class="col">

                                    <div class="ms_register_form w-100 ">
                                        <h2>Register / Sign Up</h2>
                                        <form>
                                            <div class="form-group">
                                                <input type="text" v-model="user.name" placeholder="Enter Your Name"
                                                    class="form-control">
                                                <span class="form_icon">
                                                    <i class="fa_icon form-user" aria-hidden="true"></i>
                                                </span>
                                                <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="email" v-model="user.email" placeholder="Enter Your Email"
                                                    class="form-control">
                                                <span class="form_icon">
                                                    <i class="fa_icon form-envelope" aria-hidden="true"></i>
                                                </span>
                                                <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" v-model="user.password"
                                                    placeholder="Enter Password" class="form-control">
                                                <span class="form_icon">
                                                    <i class="fa_icon form-lock" aria-hidden="true"></i>
                                                </span>
                                                <div class="invalid-feedback" v-if="errors.password">
                                                    {{errors.password[0]}}</div>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" v-model="user.password_confirmation"
                                                    placeholder="Confirm Password" class="form-control">
                                                <span class="form_icon">
                                                    <i class=" fa_icon form-lock" aria-hidden="true"></i>
                                                </span>
                                                <div class="invalid-feedback" v-if="errors.password_confirmation">
                                                    {{errors.password_confirmation[0]}}</div>
                                            </div>
                                            <button type="submit" v-on:click.prevent="register" class="btn btn-info ms_btn">register
                                                now</button>
                                        </form>
                                        <p>Already Have An Account? <router-link to="login">login here</router-link>
                                        </p>
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
        name: "Register",
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
                errors: {}
            }
        },
        methods: {
            register: async function () {
                try {
                    await auth.register(this.user);
                    this.$router.push('/login');
                    this.user = {
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                    };
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

                }

            }
        }
    };

</script>
