<template>
<div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="card shadow-lg border-0 rounded-lg mt-5">
                            <div class="card-header">
                                <h3 class="text-center font-weight-light my-4">Create or edit a User</h3>
                            </div>
                            <div class="card-body">
                                <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" v-if="userAccount">
                                    <div class="form-group" :hidden="!userAccount.id">
                                        <label>ID</label>
                                        <input type="text" class="form-control" name="id" v-model="userAccount.id" readonly />
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputLastName">Username</label>
                                                <input class="form-control py-4" name="login" :class="{ valid: !$v.userAccount.login.$invalid, invalid: $v.userAccount.login.$invalid }" v-model="$v.userAccount.login.$model" placeholder="Username" />
                                            </div>
                                            <div v-if="$v.userAccount.login.$anyDirty && $v.userAccount.login.$invalid">
                                                <small class="form-text text-danger" v-if="!$v.userAccount.login.required"> This field is required. </small>

                                                <small class="form-text text-danger" v-if="!$v.userAccount.login.maxLength">
                                                    This field cannot be longer than 50 characters.
                                                </small>

                                                <small class="form-text text-danger" v-if="!$v.userAccount.login.pattern">
                                                    This field can only contain letters, digits and e-mail addresses.
                                                </small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputEmailAddress">Email</label>
                                                <input class="form-control py-4" type="email" id="email" name="email" :class="{ valid: !$v.userAccount.email.$invalid, invalid: $v.userAccount.email.$invalid }" v-model="$v.userAccount.email.$model" email required aria-describedby="emailHelp" placeholder="Enter email address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputFirstName">First Name</label>
                                                <input class="form-control py-4" id="firstName" name="firstName" :class="{ valid: !$v.userAccount.firstName.$invalid, invalid: $v.userAccount.firstName.$invalid }" v-model="$v.userAccount.firstName.$model" type="text" placeholder="Enter first name" />
                                            </div>
                                            <div v-if="$v.userAccount.firstName.$anyDirty && $v.userAccount.firstName.$invalid">
                                                <small class="form-text text-danger" v-if="!$v.userAccount.firstName.maxLength">
                                                    This field cannot be longer than 50 characters.
                                                </small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputLastName">Last Name</label>
                                                <input class="form-control py-4" id="lastName" name="lastName" :class="{ valid: !$v.userAccount.lastName.$invalid, invalid: $v.userAccount.lastName.$invalid }" v-model="$v.userAccount.lastName.$model" type="text" placeholder="Enter last name" />
                                            </div>
                                            <div v-if="$v.userAccount.lastName.$anyDirty && $v.userAccount.lastName.$invalid">
                                                <small class="form-text text-danger" v-if="!$v.userAccount.lastName.maxLength">
                                                    This field cannot be longer than 50 characters.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Profiles</label>
                                        <select class="form-control" multiple name="authority" v-model="userAccount.authorities">
                                            <option v-for="authority of authorities" :value="authority" :key="authority">{{ authority }}</option>
                                        </select>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label" for="activated">
                                            <input class="form-check-input" :disabled="userAccount.id === null" type="checkbox" id="activated" name="activated" v-model="userAccount.activated" />
                                            <span>Activated</span>
                                        </label>
                                    </div>
                                    <button type="submit" :disabled="$v.userAccount.$invalid || isSaving" class="form-group mt-4 mb-0 btn btn-primary btn-block">
                                        Save
                                    </button>
                                    <button type="button" v-on:click="previousState()" class="form-group mt-4 mb-0 btn btn-danger btn-block">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script lang="ts" src="./user-management-edit.component.ts">
</script>
 <!-- <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" v-if="userAccount">
                <h2 id="myUserLabel">
                    Create or edit a User
                </h2>
                <div>
                    <div class="form-group" :hidden="!userAccount.id">
                        <label>ID</label>
                        <input type="text" class="form-control" name="id"
                               v-model="userAccount.id" readonly>
                    </div>

                    <div class="form-group">
                        <label class="form-control-label">Login</label>
                        <input type="text" class="form-control" name="login"
                               :class="{'valid': !$v.userAccount.login.$invalid, 'invalid': $v.userAccount.login.$invalid }"
                               v-model="$v.userAccount.login.$model">

                        <div v-if="$v.userAccount.login.$anyDirty && $v.userAccount.login.$invalid">
                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.login.required">
                                This field is required.
                            </small>

                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.login.maxLength">
                                This field cannot be longer than 50 characters.
                            </small>

                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.login.pattern">
                                This field can only contain letters, digits and e-mail addresses.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="firstName">First Name</label>
                        <input type="text" class="form-control" id="firstName" name="firstName" 
                               :class="{'valid': !$v.userAccount.firstName.$invalid, 'invalid': $v.userAccount.firstName.$invalid }"
                               v-model="$v.userAccount.firstName.$model">
                        <div v-if="$v.userAccount.firstName.$anyDirty && $v.userAccount.firstName.$invalid">
                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.firstName.maxLength">
                                This field cannot be longer than 50 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="lastName">Last Name</label>
                        <input type="text" class="form-control" id="lastName" name="lastName" 
                               :class="{'valid': !$v.userAccount.lastName.$invalid, 'invalid': $v.userAccount.lastName.$invalid }"
                               v-model="$v.userAccount.lastName.$model">
                        <div v-if="$v.userAccount.lastName.$anyDirty && $v.userAccount.lastName.$invalid">
                            <small class="form-text text-danger"
                                   v-if="!$v.userAccount.lastName.maxLength">
                                This field cannot be longer than 50 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" 
                               :class="{'valid': !$v.userAccount.email.$invalid, 'invalid': $v.userAccount.email.$invalid }"
                               v-model="$v.userAccount.email.$model" email required>
                        <div v-if="$v.userAccount.email.$anyDirty && $v.userAccount.email.$invalid">
                            <small class="form-text text-danger" v-if="!$v.userAccount.email.required"
                                  >
                                Your email is required.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.userAccount.email.email"
                                  >
                                Your email is invalid.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.userAccount.email.minLength"
                                  >
                                Your email is required to be at least 5 characters.
                            </small>
                            <small class="form-text text-danger" v-if="!$v.userAccount.email.maxLength"
                                  >
                                Your email cannot be longer than 50 characters.
                            </small>
                        </div>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="activated">
                            <input class="form-check-input" :disabled="userAccount.id === null" type="checkbox" id="activated" name="activated" v-model="userAccount.activated">
                            <span>Activated</span>
                        </label>
                    </div>

                    <div class="form-group">
                        <label>Profiles</label>
                        <select class="form-control" multiple name="authority" v-model="userAccount.authorities">
                            <option v-for="authority of authorities" :value="authority" :key="authority">{{authority}}</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span
                           >Cancel</span>
                    </button>
                    <button type="submit" :disabled="$v.userAccount.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div> -->
