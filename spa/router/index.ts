import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";

export const SEARCH_QUERY_ROUTE = "search_query";
export const SEARCH_SAVED_ROUTE = "search_saved";

const searchRoutes = [
    {
        path: "/search",
        name: SEARCH_QUERY_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/search/saved",
        name: SEARCH_SAVED_ROUTE,
        component: HomeView, // TODO: Replace Me!
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
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/application-services",
        name: BROWSE_APPLICATION_SERVICES_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/branches",
        name: BROWSE_BRANCHES_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/clusters",
        name: BROWSE_CLUSTERS_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/coding-languages",
        name: BROWSE_CODING_LANGUAGES_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/deployments",
        name: BROWSE_DEPLOYMENTS_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/environments",
        name: BROWSE_ENVIRONMENTS_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/issues",
        name: BROWSE_ISSUES_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/logs",
        name: BROWSE_LOGS_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/merge-requests",
        name: BROWSE_MERGE_REQUESTS_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/owners",
        name: BROWSE_OWNERS_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/products",
        name: BROWSE_PRODUCTS_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/repositories",
        name: BROWSE_REPOSITORIES_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/services",
        name: BROWSE_SERVICES_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/teams",
        name: BROWSE_TEAMS_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
    {
        path: "/browse/domains",
        name: BROWSE_DOMAINS_ROUTE,
        component: HomeView, // TODO: Replace Me!
    },
];

export const HOME_ROUTE = "home";
export const ABOUT_ROUTE = "about";

export const routes = [
    {
        path: "/",
        name: HOME_ROUTE,
        component: HomeView,
    },
    ...searchRoutes,
    ...browseRoutes,
    {
        path: "/about",
        name: ABOUT_ROUTE,
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../view/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
