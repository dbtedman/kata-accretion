<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";
import {
    BROWSE_APPLICATION_SERVICES_ROUTE,
    BROWSE_APPLICATIONS_ROUTE,
    BROWSE_BRANCHES_ROUTE,
    BROWSE_CLUSTERS_ROUTE,
    BROWSE_CODING_LANGUAGES_ROUTE,
    BROWSE_DEPLOYMENTS_ROUTE,
    BROWSE_DOMAINS_ROUTE,
    BROWSE_ENVIRONMENTS_ROUTE,
    BROWSE_ISSUES_ROUTE,
    BROWSE_LOGS_ROUTE,
    BROWSE_MERGE_REQUESTS_ROUTE,
    BROWSE_OWNERS_ROUTE,
    BROWSE_PRODUCTS_ROUTE,
    BROWSE_REPOSITORIES_ROUTE,
    BROWSE_SERVICES_ROUTE,
    BROWSE_TEAMS_ROUTE,
    HOME_ROUTE,
    SEARCH_QUERY_ROUTE,
    SEARCH_SAVED_ROUTE,
} from "@/router";
import { useRouter } from "vue-router";

interface NavigationItem {
    label: string;
    routeName: string;
}

interface NavigationGroup {
    label: string;
    icon: string;
    collapsed: boolean;
    children: NavigationItem[];
}

const router = useRouter();

const navigation = ref<NavigationGroup[]>([
    {
        label: "Dashboard",
        icon: "fa-solid fa-chart-line",
        collapsed: false,
        children: [
            {
                label: "Home",
                routeName: HOME_ROUTE,
            },
        ],
    },
    {
        label: "Search",
        icon: "fa-solid fa-search",
        collapsed: false,
        children: [
            {
                label: "Query",
                routeName: SEARCH_QUERY_ROUTE,
            },
            {
                label: "Saved",
                routeName: SEARCH_SAVED_ROUTE,
            },
        ],
    },
    {
        label: "Browse",
        icon: "fa-solid fa-box-archive",
        collapsed: false,
        children: [
            {
                label: "Applications",
                routeName: BROWSE_APPLICATIONS_ROUTE,
            },
            {
                label: "Application Services",
                routeName: BROWSE_APPLICATION_SERVICES_ROUTE,
            },
            {
                label: "Branches",
                routeName: BROWSE_BRANCHES_ROUTE,
            },
            {
                label: "Clusters",
                routeName: BROWSE_CLUSTERS_ROUTE,
            },
            {
                label: "Coding Languages",
                routeName: BROWSE_CODING_LANGUAGES_ROUTE,
            },
            {
                label: "Deployments",
                routeName: BROWSE_DEPLOYMENTS_ROUTE,
            },
            {
                label: "Domains",
                routeName: BROWSE_DOMAINS_ROUTE,
            },
            {
                label: "Environments",
                routeName: BROWSE_ENVIRONMENTS_ROUTE,
            },
            {
                label: "Issues",
                routeName: BROWSE_ISSUES_ROUTE,
            },
            {
                label: "Logs",
                routeName: BROWSE_LOGS_ROUTE,
            },
            {
                label: "Merge Requests",
                routeName: BROWSE_MERGE_REQUESTS_ROUTE,
            },
            {
                label: "Owners",
                routeName: BROWSE_OWNERS_ROUTE,
            },
            {
                label: "Products",
                routeName: BROWSE_PRODUCTS_ROUTE,
            },
            {
                label: "Repositories",
                routeName: BROWSE_REPOSITORIES_ROUTE,
            },
            {
                label: "Services",
                routeName: BROWSE_SERVICES_ROUTE,
            },
            {
                label: "Teams",
                routeName: BROWSE_TEAMS_ROUTE,
            },
        ],
    },
]);

const isCurrentRoute = (routeName: string): boolean => {
    return router.currentRoute.value.name === routeName;
};

const onToggleNavigation = (navigationGroupIndex: number) => {
    console.log("onToggleNavigation", { navigationGroupIndex });

    navigation.value = navigation.value.map(
        (navigationItem, navigationItemIndex) => {
            if (navigationItemIndex === navigationGroupIndex) {
                return {
                    ...navigationItem,
                    collapsed: !navigationItem.collapsed,
                };
            }
            return navigationItem;
        }
    );
};
</script>

<template>
    <nav class="nav-bar">
        <div
            class="nav-bar__item"
            v-for="(navigationItem, navigationItemIndex) in navigation"
            :key="navigationItemIndex"
        >
            <div
                class="nav-bar__item-label"
                @click="onToggleNavigation(navigationItemIndex)"
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
