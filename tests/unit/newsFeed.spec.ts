import { shallowMount } from "@vue/test-utils";
import NewsFeed from "@/components/NewsFeed.vue";

describe("NewsFeed.vue", () => {
  it("renders props.newsFeed when passed", () => {
    const newsFeed = "This is a news feed";
    const wrapper = shallowMount(NewsFeed, {
      propsData: { newsFeed },
    });
    expect(wrapper.text()).toMatch(newsFeed);
  });
});
