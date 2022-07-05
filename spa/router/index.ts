import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";

export const SEARCH_QUERY_ROUTE = "search_query";
export const SEARCH_SAVED_ROUTE = "search_saved";

const searchRoutes = [
    {
        path: "/search",
        name: SEARCH_QUERY_ROUTE,
        component: () => import("../view/QueryView.vue"),
    },
    {
        path: "/search/saved",
        name: SEARCH_SAVED_ROUTE,
        component: () => import("../view/SavedQueriesView.vue"),
    },
];

export const BROWSE_APPLICATIONS_ROUTE = "browse_applications";
export const BROWSE_APPLICATION_SERVICES_ROUTE = "browse_application_services";
export const BROWSE_BRANCHES_ROUTE = "browse_branches";
export const BROWSE_CLUSTERS_ROUTE = "browse_clusters";
export const BROWSE_CODING_LANGUAGES_ROUTE = "browse_coding_languages";
export const BROWSE_DEPLOYMENTS_ROUTE = "browse_deployment";
export const BROWSE_DOMAINS_ROUTE = "browse_domains";
export const BROWSE_ENVIRONMENTS_ROUTE = "browse_environments";
export const BROWSE_ISSUES_ROUTE = "browse_issues";
export const BROWSE_LOGS_ROUTE = "browse_logs";
export const BROWSE_MERGE_REQUESTS_ROUTE = "browse_merge_requests";
export const BROWSE_OWNERS_ROUTE = "browse_owners";
export const BROWSE_PRODUCTS_ROUTE = "browse_products";
export const BROWSE_REPOSITORIES_ROUTE = "browse_repositories";
export const BROWSE_SERVICES_ROUTE = "browse_services";
export const BROWSE_TEAMS_ROUTE = "browse_teams";

const browseRoutes = [
    {
        path: "/browse/applications",
        name: BROWSE_APPLICATIONS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/application-services",
        name: BROWSE_APPLICATION_SERVICES_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/branches",
        name: BROWSE_BRANCHES_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/clusters",
        name: BROWSE_CLUSTERS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/coding-languages",
        name: BROWSE_CODING_LANGUAGES_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/deployments",
        name: BROWSE_DEPLOYMENTS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/domains",
        name: BROWSE_DOMAINS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/environments",
        name: BROWSE_ENVIRONMENTS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/issues",
        name: BROWSE_ISSUES_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/logs",
        name: BROWSE_LOGS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/merge-requests",
        name: BROWSE_MERGE_REQUESTS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/owners",
        name: BROWSE_OWNERS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/products",
        name: BROWSE_PRODUCTS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/repositories",
        name: BROWSE_REPOSITORIES_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/services",
        name: BROWSE_SERVICES_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
    {
        path: "/browse/teams",
        name: BROWSE_TEAMS_ROUTE,
        component: () => import("../view/BrowseView.vue"),
    },
];

export const HOME_ROUTE = "home";

export const routes = [
    {
        path: "/",
        name: HOME_ROUTE,
        component: HomeView,
    },
    ...searchRoutes,
    ...browseRoutes,
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
