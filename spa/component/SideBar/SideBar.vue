<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRouter } from "vue-router";
import { useNavigationStore } from "@/store/navigation";

const router = useRouter();
const navigation = useNavigationStore();

const isCurrentRoute = (routeName: string): boolean => {
    return router.currentRoute.value.name === routeName;
};
</script>

<template>
    <nav class="nav-bar">
        <div
            class="nav-bar__item"
            v-for="(navigationItem, navigationItemIndex) in navigation.list"
            :key="navigationItemIndex"
        >
            <div
                class="nav-bar__item-label"
                @click="navigation.toggleCollapsed(navigationItemIndex)"
            >
                <div class="nav-bar__item-label-icon">
                    <FontAwesomeIcon :icon="navigationItem.icon" />
                </div>
                <div class="nav-bar__item-label-text">
                    {{ navigationItem.label }}
                </div>
                <div class="nav-bar__item-label-collapse">
                    <FontAwesomeIcon
                        icon="fa-chevron-up"
                        v-if="navigationItem.collapsed"
                    />
                    <FontAwesomeIcon icon="fa-chevron-down" v-else />
                </div>
            </div>
            <div class="nav-bar__sub-items" v-if="!navigationItem.collapsed">
                <div
                    class="nav-bar__sub-item"
                    v-for="(
                        navigationItemChild, navigationItemChildIndex
                    ) in navigationItem.children"
                    :key="navigationItemChildIndex"
                >
                    <router-link
                        :class="`nav-bar__sub-item-label${
                            isCurrentRoute(navigationItemChild.routeName)
                                ? ' nav-bar__sub-item-label--selected'
                                : ''
                        }`"
                        :to="{ name: navigationItemChild.routeName }"
                    >
                        {{ navigationItemChild.label }}
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@import "./spa/theme/sizes";
@import "./spa/theme/colours";

.nav-bar {
    width: $size-sidebar;
    padding: $size-grid * 2;

    &__item {
        margin-bottom: $size-grid * 2;
    }

    &__item-label {
        margin-bottom: $size-grid * 2;
        display: flex;
        font-size: $size-grid * 2;
        color: $colour-background-text;
        flex: 1;
        cursor: pointer;
    }

    &__item-label-icon {
        width: $size-grid * 4;
    }

    &__item-label-collapse {
    }

    &__item-label-text {
        font-weight: 300;
        flex: 1;
    }

    &__sub-items {
        margin-left: $size-grid * 4;
    }

    &__sub-item {
        display: flex;
    }

    &__sub-item-label {
        margin-bottom: $size-grid * 2;
        font-size: $size-grid * 1.8;
        color: $colour-background-text;
        text-decoration: none;
        font-weight: 300;
        display: flex;
        flex: 1;

        &:hover,
        &--selected {
            color: $colour-highlight;
        }
    }
}
</style>
