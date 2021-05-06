<template>
  <div class="news-feed">
    <h1>{{ chitterFeed }}</h1>
    <ul>
      <li v-for="chitter in peeps" :key="chitter.id">
        {{ chitter.date }} {{ chitter.body }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PeepsTypes } from "@/types/PeepsTypes.interface";
import fetch from "node-fetch";

@Component
export default class NewsFeed extends Vue {
  @Prop() private chitterFeed!: string;
  peeps!: PeepsTypes;

  created(): unknown {
    return fetch("http://localhost:4000/chitter")
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
