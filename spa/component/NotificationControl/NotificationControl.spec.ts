import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import NotificationControl from "./NotificationControl.vue";

describe("NotificationControl", () => {
    it("renders properly", () => {
        const wrapper = mount(NotificationControl, { props: {} });
        expect(wrapper.exists()).toBe(true);
    });
});
