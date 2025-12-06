<template>
    <div class="w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-image"
                                    :style="`background: url(${$store.state.serverPath}/images/vector.png)`"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                            <p class="mb-4">We get it, stuff happens. Just enter your email address
                                                below and we'll send you an email how to reset your password!</p>
                                        </div>
                                        <div class="alert alert-danger" v-if="errors.message">{{errors.message[0]}}
                                        </div>
                                        <form v-on:submit.prevent="onSubmit">
                                            <div class="form-group">
                                                <input type="email" v-model="email"
                                                    class="form-control form-control-user"
                                                    placeholder="Enter Email Address..." />
                                                <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-user btn-block"
                                                ref="btnSubmit">Reset Password</button>
                                        </form>
                                        <hr />
                                        <div class="text-center">
                                            <!-- <router-link to="/register" class="small">Create an Account!</router-link> -->
                                        </div>
                                        <div class="text-center">
                                            <router-link to="/login" class="small">Already have an account? Login!
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
    </div>
</template>


<script>
    import * as auth from "../../services/auth_service";
    export default {
        name: 'resetPasswordRequest',
        components:{
           
        },
        data() {
            return {
                email: '',
                errors: {},
                btnSubmitOldHtml: '',
            }
        },
        methods: {
            onSubmit: async function () {
                this.disableSubmission(this.$refs.btnSubmit);
                try {
                    const request = {
                        email: this.email
                    };
                    const response = await auth.resetPasswordRequest(request);
                    this.$store.state.commonString = this.email;
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000,
                    });
                    this.$router.push('/reset-password');
                } catch (error) {
                    console.log(error);
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        default:
                            this.errors = {};
                            this.flashMessage.error({
                                message: "Some error occurred, please try again",
                                time: 5000,
                            });
                            break;
                    }

                    this.enableSubmission(this.$refs.btnSubmit);
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
<style scoped>
    .bg-image {
        background-position: center !important;
        background-size: cover !important;
    }

    .relative {
        position: relative;
    }

    .password-strength {
        position: absolute;
        right: 0;
        top: -13px;
        font-size: 10px;
    }

    .show-password {
        border: 0;
        font-size: 16px;
        color: #4e73df;
        background-color: transparent;
        position: absolute;
        top: 20px;
        right: 5px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    .show-password:focus {
        outline: 0;
    }

</style>

