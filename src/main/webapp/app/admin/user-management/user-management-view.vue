<template>
<div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="card shadow-lg border-0 rounded-lg ">
                            <div class="card-header">
                                <h3 class="text-center font-weight-light my-4"><span>User Details </span></h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <dt><span>First Name</span></dt>
                                        <dt><span>Last Name</span></dt>
                                        <dt><span>Email</span></dt>
                                        <dt><span>Created By</span></dt>
                                        <dt><span>Created Date</span></dt>
                                    </div>
                                    <div class="col-md-6">
                                        <dd>{{user.firstName}}</dd>
                                        <dd>{{user.lastName}}</dd>
                                        <dd>{{user.email}}</dd>
                                        <dd>{{user.createdBy}}</dd>
                                        <dd> {{user.createdDate | formatDate }}</dd>

                                    </div>
                                </div>

                            </div>
                            <div class="card-footer text-center">
                                <router-link tag="button" type="submit" :to="{name: 'JhiUser'}" class="btn btn-info">
                                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                                </router-link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script lang="ts" src="./user-management-view.component.ts">
</script>

<!-- <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="user">
                <h2 class="jh-entity-heading">
                    <span>User</span> [<b>{{user.login}}</b>]
                </h2>
                <dl class="row jh-entity-details">
                    <dt><span>Login</span></dt>
                    <dd>
                        <span>{{user.login}}</span>
                        <b-badge variant="success" v-if="user.activated">Activated</b-badge>
                        <b-badge variant="danger" v-if="!user.activated">Deactivated</b-badge>
                    </dd>
                    <dt><span>First Name</span></dt>
                    <dd>{{user.firstName}}</dd>
                    <dt><span>Last Name</span></dt>
                    <dd>{{user.lastName}}</dd>
                    <dt><span>Email</span></dt>
                    <dd>{{user.email}}</dd>
                    <dt><span>Created By</span></dt>
                    <dd>{{user.createdBy}}</dd>
                    <dt><span>Created Date</span></dt>
                    <dd>                      {{user.createdDate | formatDate }}
                    </dd>
                    <dt><span>Last Modified By</span></dt>
                    <dd>{{user.lastModifiedBy}}</dd>
                    <dt><span>Last Modified Date</span></dt>
                    <dd>                      {{user.lastModifiedDate | formatDate }}
                    </dd>
                    <dt><span>Profiles</span></dt>
                    <dd>
                        <ul class="list-unstyled">
                            <li v-for="authority of user.authorities" :key="authority">
                                <b-badge variant="info">{{authority}}</b-badge>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <router-link tag="button" type="submit"
                        :to="{name: 'JhiUser'}"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </router-link>
            </div>
        </div>
    </div> -->
