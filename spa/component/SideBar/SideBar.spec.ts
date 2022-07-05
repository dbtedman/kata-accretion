import { beforeEach, describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

import SideBar from "./SideBar.vue";
import { createRouter, createWebHistory } from "vue-router";
import { HOME_ROUTE, routes } from "@/router";

describe("SideBar", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("renders properly", async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: routes,
        });
        await router.push({ name: HOME_ROUTE });
        await router.isReady();

        const wrapper = mount(SideBar, {
            props: {},
            global: {
                plugins: [router],
            },
        });
        expect(wrapper.exists()).toBe(true);
    });
});
