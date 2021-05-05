<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld />
    <NewsFeed />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import NewsFeed from "@/components/NewsFeed.vue";

@Component({
  components: {
    HelloWorld,
    NewsFeed,
  },
})
export default class Home extends Vue {}
</script>
