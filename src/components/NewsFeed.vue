<template>
  <div class="news-feed">
    <h1>This is a news feed</h1>
    <!-- <h2>{{ chitterNewsFeed }}</h2> -->
    <!-- {{ peep1 }} {{ peep2 }} -->
    <ul>
      <li v-for="chitter in peeps" :key="chitter.id">
        {{ chitter.date }} {{ chitter.body }}
      </li>
    </ul>
    <!-- <h1>{{ peeps }}</h1> -->
    <!-- {{ getPeeps() }} -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PeepsTypes } from "@/types/PeepsTypes.interface";

@Component
export default class NewsFeed extends Vue {
  @Prop() // private peeps: CommentsTypes | undefined;
  peeps!: PeepsTypes;

  created(): void {
    fetch("http://localhost:4000/chitter")
      .then((res) => res.json())
      .then((peeps) => {
        this.peeps = peeps;
      });
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
