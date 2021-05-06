import { shallowMount } from "@vue/test-utils";
import NewsFeed from "@/components/NewsFeed.vue";

describe("NewsFeed.vue", () => {
  it("renders props.chitterFeed when passed", () => {
    const chitterFeed = "Welcome to Chitter";
    const wrapper = shallowMount(NewsFeed, {
      propsData: { chitterFeed },
    });
    expect(wrapper.text()).toMatch(chitterFeed);
  });
});
