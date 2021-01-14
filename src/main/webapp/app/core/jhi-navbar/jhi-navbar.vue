<template>
<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <div class="logo" b-link to="/">
        <span class="logo-img"></span>
        <span class="navbar-brand">Zipit Smart</span> 
    </div>
    <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
    <!-- Navbar Search-->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
            </div>
        </div>
    </form>
    <!-- Navbar-->
    <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="/account/settings">Settings</a>
                <div class="dropdown-divider"></div>
                <b-dropdown-item v-if="authenticated" v-on:click="logout()" id="logout" active-class="active">
                    <span>Logout</span>
                </b-dropdown-item>
            </div>
        </li>
    </ul>
</nav>
</template>

<script lang="ts" src="./jhi-navbar.component.ts">
</script>

<style scoped>

.logo-img {
    height: 100%;
    background: url("../../../content/images/logo-jhipster.png") no-repeat center center;
    background-size: contain;
    width: 100%;
    filter: drop-shadow(0 0 0.05rem white);
}
</style>
