<template>
<div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <div class="sb-sidenav-menu-heading">Core</div>
                <router-link class="nav-link" to="/dashboard">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </router-link>
                <router-link class="nav-link" to="/admin/user-management">
                    <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
                    Users
                </router-link>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div class="sb-nav-link-icon"><i class="fas fa-chart-bar"></i></div>
                    Monitoring
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        <router-link class="nav-link" to="/admin/audits">
                            <div class="sb-nav-link-icon"><i class="fas fa-file-invoice"></i></div>
                            Audits
                        </router-link>
                        <router-link class="nav-link" to="/admin/jhi-metrics">
                            <div class="sb-nav-link-icon"><i class="fas fa-signal"></i></div>
                            Metrics
                        </router-link>
                        <router-link class="nav-link" to="/admin/docs">
                            <div class="sb-nav-link-icon"><i class="fas fa-plug"></i></div>
                            API
                        </router-link>
                    </nav>
                </div>
            </div>
        </div>
        <div class="sb-sidenav-footer" v-if="authenticated">
            <div class="small">Logged in as:</div>
            {{ username }}
        </div>
    </nav>
</div>
</template>

<script lang="ts" src="./sidebar.component.ts">
</script>

<style scoped>
</style>
