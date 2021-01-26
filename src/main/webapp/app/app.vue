<template>
<div id="app" class="sb-nav-fixed">
    <div class="content" v-if="authenticated">
        <jhi-navbar />
        <div id="layoutSidenav">
            <SideBar />
            <HeroContent />
        </div>
    </div>
    <login-form v-if="!authenticated"></login-form>

</div>
</template>
<script lang="ts" src="./app.component.ts">
</script>

<style scoped>
</style>
