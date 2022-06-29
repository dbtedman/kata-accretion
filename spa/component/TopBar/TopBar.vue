<script setup lang="ts">
import SearchControl from "@/component/SearchControl/SearchControl.vue";
import ApplicationLogo from "@/component/ApplicationLogo/ApplicationLogo.vue";
import AccountControl from "@/component/AccountControl/AccountControl.vue";
import NotificationControl from "@/component/NotificationControl/NotificationControl.vue";
</script>

<template>
    <header class="top-bar">
        <div class="logo-container">
            <ApplicationLogo />
        </div>
        <div class="top-bar-left-right">
            <div class="top-bar-left">
                <SearchControl />
            </div>
            <div class="top-bar-right">
                <NotificationControl />
                <AccountControl />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import "./spa/theme/colours";
@import "./spa/theme/sizes";

.top-bar {
    background-color: $colour-foreground;
    display: flex;
    box-shadow: 0 0 0.2rem 0 rgba(0, 0, 0, 0.1);
    z-index: 1;
    height: 3rem;
}

.logo-container {
    width: $size-sidebar;
    display: flex;
}

.top-bar-left-right {
    display: flex;
    flex-direction: row;
    flex: 1;
}

.top-bar-left {
    display: flex;
    flex: 1;
}

.top-bar-right {
    display: flex;
}
</style>
