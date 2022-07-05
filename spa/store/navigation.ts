import { defineStore } from "pinia";
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

const initialState: NavigationGroup[] = [
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
];

export const useNavigationStore = defineStore({
    id: "navigation",
    state: () => ({
        list: initialState,
    }),
    getters: {},
    actions: {
        toggleCollapsed(targetToCollapseIndex: number) {
            this.list = this.list.map((navigationItem, navigationItemIndex) => {
                if (navigationItemIndex === targetToCollapseIndex) {
                    return {
                        ...navigationItem,
                        collapsed: !navigationItem.collapsed,
                    };
                }
                return navigationItem;
            });
        },
    },
});
