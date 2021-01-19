<template>
<div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <div class="sb-sidenav-menu-heading">Core</div>
                <a class="nav-link" href="/dashboard">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </a>
                <a class="nav-link" href="/admin/user-management">
                    <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
                    Users
                </a>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div class="sb-nav-link-icon"><i class="fas fa-chart-bar"></i></div>
                    Monitoring
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="/admin/logs">
                            <div class="sb-nav-link-icon"><i class="fas fa-file-invoice"></i></div>
                            Audits
                        </a>
                        <a class="nav-link" href="/admin/jhi-metrics">
                            <div class="sb-nav-link-icon"><i class="fas fa-chart-bar"></i></div>
                            Metrics
                        </a>
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
