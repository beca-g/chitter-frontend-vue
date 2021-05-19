import { shallowMount } from "@vue/test-utils";
import NewPeepForm from "@/components/NewPeepForm.vue";

describe("NewPeepForm.vue", () => {
  it("should create a new peep", () => {
    const peep = "Test peep";

    const wrapper = shallowMount(NewPeepForm, {
      propsData: { peep },
    });
    expect(wrapper.text()).toContain("Test peep");
  });
});
