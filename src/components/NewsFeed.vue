<template>
  <div class="news-feed">
    <h1>This is a news feed</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NewsFeed extends Vue {
  @Prop() private chitterFeed!: string;
  peep1 = "This is a peep";
  peep2 = "This is a 2nd peep";

  get peeps(): string {
    return this.peep1 + this.peep2;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
