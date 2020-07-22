import { shallowMount } from "@vue/test-utils";
import About from "@/modules/about/views/About.vue";

describe("About.vue", () => {
  it("renders about text", () => {
    const wrapper = shallowMount(About);
    expect(wrapper.text()).toMatch("About...");
  });
});
