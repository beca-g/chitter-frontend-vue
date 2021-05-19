<template>
  <div class="newPeepForm">
    <form id="peep-form" @submit.prevent="createPeep" method="POST" action="/">
      <label>Post a peep to chitter</label>
      <input
        type="text"
        id="body"
        name="body"
        placeholder="What's on your mind?"
        required
        v-model="peep"
      />
      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
    <p>Peep body: {{ peep }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class NewPeepForm extends Vue {
  @Prop()
  peep!: string;
  formData!: {
    body: string;
  };
  peepBody!: string;

  createPeep(): void {
    this.formData = { body: this.peep };
    axios.post("http://localhost:4000/chitter", this.formData).then((res) => {
      console.log(res.data);
      this.peepBody = res.data;
    });
    window.location.reload();
  }
}
</script>

<style scoped>
form {
  max-width: 500px;
  margin: auto;
  background: #eee;
  text-align: left;
  padding: 10px;
}
label {
  color: rgb(97, 97, 97);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: white;
  border: 0;
  padding: 7px 20px;
  margin-top: 20px;
  color: #555;
  border-radius: 20px;
  float: center;
}

.submit {
  text-align: center;
}
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
