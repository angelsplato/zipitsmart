<template>
<div class="container-fluid mx-auto">
    <br>
    <h2>
        <span id="user-management-page-heading">Users</span>
        <router-link tag="button" class="btn btn-primary float-right jh-create-entity .px-2" :to="{name: 'JhiUserCreate'}">
            <font-awesome-icon icon="plus"></font-awesome-icon> <span>Create a new User</span>
        </router-link>
    </h2>
    <b-alert :show="dismissCountDown" dismissible :variant="alertType" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        {{alertMessage}}
    </b-alert>
    <div class="card mb-4">
        <div class="card-header">
            <i class="fas fa-table mr-1"></i>
            Users
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-sm" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Login</th>
                            <th>Email</th>
                            <th></th>
                            <th>Created Date</th>
                            <th>Last Modified By</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody v-if="users">
                        <tr v-for="user in users" :key="user.id" :id="user.login">
                            <td>{{user.login}}</td>
                            <td>{{user.email}}</td>
                            <td class="text-center">
                                <button class="btn btn-danger btn-sm deactivated" v-on:click="setActive(user, true)" v-if="!user.activated">Deactivated</button>
                                <button class="btn btn-success btn-sm" v-on:click="setActive(user, false)" v-if="user.activated" :disabled="username === user.login">Activated</button>
                            </td>
                            <td>{{user.createdDate | formatDate}}</td>
                            <td>{{user.lastModifiedBy}}</td>
                            <td class="text-center">
                                <div class="btn-group">
                                    <router-link :to="{name: 'JhiUserView', params: {userId: user.login}}" tag="button" class="btn btn-info btn-sm details">
                                        <font-awesome-icon icon="eye"></font-awesome-icon>
                                        <span class="d-none d-md-inline">View</span>
                                    </router-link>
                                    <router-link :to="{name: 'JhiUserEdit', params: {userId: user.login}}" tag="button" class="btn btn-primary btn-sm edit">
                                        <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                        <span class="d-none d-md-inline">Edit</span>
                                    </router-link>
                                    <b-button v-on:click="prepareRemove(user)" variant="danger" class="btn btn-sm delete" :disabled="username === user.login">
                                        <font-awesome-icon icon="times"></font-awesome-icon>
                                        <span class="d-none d-md-inline">Delete</span>
                                    </b-button>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
                <b-modal ref="removeUser" id="removeUser" title="Confirm delete operation" @ok="deleteUser()">
                    <div class="modal-body">
                        <p id="jhi-delete-user-heading">Are you sure you want to delete this user?</p>
                    </div>
                    <div slot="modal-footer">
                        <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                        <button type="button" class="btn btn-primary" id="confirm-delete-user" v-on:click="deleteUser()">Delete</button>
                    </div>
                </b-modal>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" src="./user-management.component.ts">
</script>
