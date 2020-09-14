<template>
  <div id="app">
    <button disabled @click="handleClick">click</button>
  </div>
</template>

<script>
import Button from "./components/Button";
export default {
  name: "App",
  components: {
    Button,
  },
  methods: {
    handleClick() {
      console.log("???");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
