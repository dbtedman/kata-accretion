import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import AccountControl from "./AccountControl.vue";

describe("AccountControl", () => {
    it("renders properly", () => {
        const wrapper = mount(AccountControl, { props: {} });
        expect(wrapper.exists()).toBe(true);
    });
});
