import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import SearchControl from "./SearchControl.vue";

describe("SearchControl", () => {
    it("renders properly", () => {
        const wrapper = mount(SearchControl, { props: {} });
        expect(wrapper.exists()).toBe(true);
    });
});
