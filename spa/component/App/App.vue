<script setup lang="ts">
import { RouterView } from "vue-router";
import TopBar from "@/component/TopBar/TopBar.vue";
import SideBar from "@/component/SideBar/SideBar.vue";
import PageFooter from "@/component/PageFooter/PageFooter.vue";
</script>

<template>
    <TopBar />
    <div class="side-bar-router-view">
        <SideBar />
        <div class="router-view-footer">
            <div class="router-view">
                <RouterView />
            </div>
            <PageFooter />
        </div>
    </div>
</template>

<style lang="scss">
@import "./spa/theme/colours";
@import "./spa/theme/fonts";

body,
html {
    padding: 0;
    margin: 0;
    display: flex;
    flex: 1;
    height: 100%;
    font-family: $body-font-family;
    color: $colour-foreground-text;
}

#app {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
}

.side-bar-router-view {
    background-color: $colour-background;
    display: flex;
    flex-direction: row;
    flex: 1;
}

.router-view-footer {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.router-view {
    flex: 1;
}
</style>
