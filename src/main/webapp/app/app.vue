<template>
<div class="sb-nav-fixed">
    <div v-if="authenticated == true">
        <jhi-navbar />
        <div id="layoutSidenav">
            <SideBar />
            <HeroContent />
        </div>
    </div>
    <login-form v-if="authenticated == false"></login-form>
</div>
</template>
<script src="content/js/scripts.js"></script>
<script lang="ts" src="./app.component.ts">
</script>

<!-- <div>

    <div class="sb-nav-fixed" v-if="authenticated == true">
        <jhi-navbar />
        <div id="layoutSidenav">
            <SideBar />
            <HeroContent />
        </div>
    </div>

    <login-form v-if="authenticated == false"></login-form>
</div> -->
