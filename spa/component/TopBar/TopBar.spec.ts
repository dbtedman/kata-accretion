import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import TopBar from "./TopBar.vue";

describe("TopBar", () => {
    it("renders properly", () => {
        const wrapper = mount(TopBar, { props: {} });
        expect(wrapper.exists()).toBe(true);
    });
});
