<template>
<div class="login">
    <nav class="logo">
    </nav>
    <div class="row justify-content-center">
        <b-alert show variant="danger" v-if="authenticationError">
            <strong>Failed to sign in!</strong> Please check your credentials and try again.
        </b-alert>
    </div>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg ">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">Zipit smart portal</h3>
                                </div>
                                <div class="card-body">
                                    <form role="form" v-on:submit.prevent="doLogin()">
                                        <div class="form-group">
                                            <label class="small mb-1" for="inputEmailAddress">Username</label>
                                            <input class="form-control py-4" id="username" type="text" name="username" autofocus v-model="login" placeholder="Enter username" />
                                        </div>
                                        <div class="form-group">
                                            <label class="small mb-1" for="inputPassword">Password</label>
                                            <input class="form-control py-4" id="password" variant="warning" type="password" name="password"  placeholder="Your password" v-model="password" />
                                        </div>
                                        <b-form-checkbox id="rememberMe" name="rememberMe" v-model="rememberMe" checked>
                                            <span>Remember password</span>
                                        </b-form-checkbox>
                                        <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <!-- <a class="small" href="password.html">Forgot Password?</a> -->
                                            <b-button class="btn btn-primary" type="submit" variant="warning">Log in</b-button>

                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center">
                                    <div class="small"><a href="#">Need an account? Sign up!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

</div>
</template>

<script lang="ts" src="./login-form.component.ts">
</script>

<style>
.logo {
    height: 6rem;
    background: url("../../../content/images/logo.png") no-repeat;
    background-size: contain;
    width: 7rem;
}

.zipit-smart-logo {
    height: 10rem;
    background: url("../../../content/images/zipitsmartlogo.png") no-repeat;
    background-size: contain;
    text-align: center;
    width: 10rem;
}

.login {
    background: url("../../../content/images/email2.png") no-repeat;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
    <!-- <div class="row justify-content-center">
        <div class="col-md-4">
            <b-form class="text-center" role="form" v-on:submit.prevent="doLogin()">
                <h1 class="card-title block text-center"><span>ZIMSWICTH COMMERCE PORTAL</span></h1>
                <b-form-group label="" label-for="username">
                    <b-form-input  class="rgba-pink-light" id="username" type="text" name="username" autofocus placeholder="Your username" v-model="login">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="" label-for="password">
                    <b-form-input id="password" variant="warning" type="password" name="password" v-model.trim="name" placeholder="Your password" v-model="password">
                    </b-form-input>
                </b-form-group>
                <b-form-checkbox id="rememberMe" name="rememberMe" v-model="rememberMe" checked>
                    <span>Remember me</span>
                </b-form-checkbox>
                <div>
                    <b-button type="submit" variant="warning">Sign in</b-button>
                </div>
            </b-form>
            <p></p>
            <div>
                <b-alert show variant="warning">
                    <b-link :to="'/account/reset/request'" class="alert-link">Did you forget your password?</b-link>
                </b-alert>
            </div>
            <div>
                <b-alert show variant="warning">
                    <span>You don't have an account yet?</span>
                    <b-link :to="'/register'" class="alert-link">Register a new account</b-link>
                </b-alert>
            </div>
        </div>
    </div> -->
