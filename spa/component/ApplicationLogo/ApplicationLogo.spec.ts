import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import ApplicationLogo from "./ApplicationLogo.vue";

describe("ApplicationLogo", () => {
    it("renders properly", () => {
        const wrapper = mount(ApplicationLogo, { props: {} });
        expect(wrapper.exists()).toBe(true);
    });
});
