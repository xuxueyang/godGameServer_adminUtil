<template>
  <div id="HelloWorld">
    <ul>
      <li>
        <router-link to="/managers">管理</router-link>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#HelloWorld  ul{
  padding-top: 60px;
  font-size: 18px;
}
#HelloWorld  ul li{
  display: flex;
  margin-left: 60px;
  padding-top: 20px;
}
h1, h2 {
  font-weight: normal;
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
