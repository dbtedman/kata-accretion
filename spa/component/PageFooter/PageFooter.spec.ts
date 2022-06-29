import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import PageFooter from "./PageFooter.vue";

describe("PageFooter", () => {
    it("renders properly", () => {
        const wrapper = mount(PageFooter, { props: {} });
        expect(wrapper.exists()).toBe(true);
    });
});
