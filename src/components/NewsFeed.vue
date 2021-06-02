<template>
  <div class="news-feed">
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
import axios from "axios";

@Component({})
export default class NewsFeed extends Vue {
  @Prop()
  peeps!: PeepsTypes;

  mounted(): unknown {
    return axios
      .get("http://localhost:4000/chitter/peeps")
      .then((response) => (this.peeps = response.data));
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
  padding: 2px;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
