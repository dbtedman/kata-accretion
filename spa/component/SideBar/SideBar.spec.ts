import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import SideBar from "./SideBar.vue";

describe("SideBar", () => {
    it("renders properly", () => {
        const wrapper = mount(SideBar, { props: {} });
        expect(wrapper.exists()).toBe(true);
    });
});
