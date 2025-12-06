<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-image" :style="`background: url(${$store.state.serverPath}/images/vector.png)`"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-2">Reset Password?</h1>
                                        <p class="mb-4"
                                        >Here you can reset your password!</p>
                                    </div>
                                    <div class="alert alert-danger" v-if="errors.message">{{errors.message[0]}}</div>
                                    <form v-on:submit.prevent="onSubmit">
                                        <div class="form-group">
                                            <input
                                                type="email"
                                                v-model="user.email"
                                                class="form-control form-control-user"
                                                placeholder="Enter Email Address"
                                            />
                                            <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                        </div>

                                        <div class="form-group">
                                            <input
                                                type="number"
                                                min="0"
                                                v-model="user.password_code"
                                                class="form-control form-control-user"
                                                placeholder="Enter Code"
                                            />
                                            <div class="invalid-feedback" v-if="errors.password_code">{{errors.password_code[0]}}</div>
                                        </div>

                                        <div class="form-group">
                                            <div class="relative">
                                                <input
                                                    type="password"
                                                    v-model="user.password"
                                                    v-on:keyup="validatePassword"
                                                    ref="passwordField"
                                                    class="form-control form-control-user"
                                                    placeholder="Password" />
                                                <button class="show-password" type="button" v-on:click="togglePasswordShow">
                                                    <span class="fa fa-eye" ref="passwordIcon"></span>
                                                </button>
                                                <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                                <i v-if="user.password.length" ref="passwordStrength" class="password-strength"></i>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <input
                                                type="password"
                                                v-model="user.password_confirmation"
                                                class="form-control form-control-user"
                                                placeholder="Repeat Password" />
                                                <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-user btn-block" ref="btnSubmit">Change Password</button>
                                    </form>
                                    <hr />
                                    <div class="text-center">
                                        <!-- <router-link to="/register" class="small">Create an Account!</router-link> -->
                                    </div>
                                    <div class="text-center">
                                        <router-link to="/login" class="small">Already have an account? Login!</router-link>
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
import * as auth from '../../services/auth_service';
export default {
    name: 'resetPassword',
    data() {
        return {
            user: {
                email: this.$store.state.commonString,
                password_code: '',
                password: '',
                password_confirmation: ''
            },
            btnSubmitOldHtml: '',
            errors: {},
        }
    },
    mounted() {
        if (this.$store.state.commonMessage === 'reset_password_request') {
            this.user.email = this.$store.state.commonVariable;
            this.flashMessage.info({
                message: "A verification code has been sent to the email you provided",
                time: 5000,
            });

            this.$store.state.commonMessage = null;
            this.$store.state.commonVariable = null;
        }
    },
    methods: {
        togglePasswordShow() {
            let passwordField = this.$refs.passwordField;
            let passwordIcon = this.$refs.passwordIcon;
            if (passwordField.getAttribute('type') === 'password') {
                passwordField.setAttribute('type', 'text');
                passwordIcon.classList.remove('fa-eye');
                passwordIcon.classList.add('fa-eye-slash');
            } else {
                passwordField.setAttribute('type', 'password');
                passwordIcon.classList.remove('fa-eye-slash');
                passwordIcon.classList.add('fa-eye');
            }
        },
        validatePassword() {
            if (this.user.password.length === 0) {
                return;
            }
            this.errors.password = '';
            var matchedCase = new Array();
            matchedCase.push("[$@$!%*#?&]");
            matchedCase.push("[A-Z]");
            matchedCase.push("[0-9]");
            matchedCase.push("[a-z]");

            var ctr = 0;
            for (var i = 0; i < matchedCase.length; i++) {
                if (new RegExp(matchedCase[i]).test(this.user.password)) {
                    ctr++;
                }
            }

            var color = "";
            var strength = "";
            switch (ctr) {
                case 0:
                case 1:
                case 2:
                    strength = "Very Weak";
                    color = "red";
                    break;
                case 3:
                    strength = "Medium";
                    color = "orange";
                    break;
                case 4:
                    strength = "Strong";
                    color = "green";
                    break;
            }
            this.$refs.passwordStrength.innerHTML = strength;
            this.$refs.passwordStrength.style.color = color;
        },
        onSubmit: async function() {
            this.disableSubmission(this.$refs.btnSubmit);

            try {
                const response = await auth.resetPassword(this.user);
                this.flashMessage.success({
                    message: response.data.message,
                    time: 5000,
                });
                this.$router.push('login');
            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    case 401:
                        this.flashMessage.error({
                            message: error.response.data.message,
                            time: 5000,
                        });
                        break;
                    default:
                        this.errors = {};
                        this.flashMessage.error({
                            message: "Some error occurred please try again",
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
