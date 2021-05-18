import { shallowMount } from "@vue/test-utils";
import NewsFeed from "@/components/NewsFeed.vue";

describe("NewsFeed.vue", () => {
  it("renders props.chitterFeed when passed", () => {
    const peep = "peep peep";

    const wrapper = shallowMount(NewsFeed, {
      propsData: { peep },
    });
    expect(wrapper.html()).toContain("peep peep");
  });
});
