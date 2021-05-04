<template>
  <div class="news-feed">
    <h1>This is a news feed</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsFeed from "@/components/NewsFeed.vue"; // @ is an alias to /src

@Component({
  components: {
    NewsFeed,
  },
})
export default class Feed extends Vue {}
</script>
