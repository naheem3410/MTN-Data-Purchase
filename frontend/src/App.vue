<!-- frontend/src/App.vue -->
<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <router-link to="/">MTN Data</router-link>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add your styles here */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.navbar {
  background-color: #333;
  padding: 10px 0;
  color: white;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.navbar .logo {
  font-size: 1.5em;
}

.navbar .nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar .nav-links li {
  margin-left: 20px;
}

.navbar .nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1em;
}

.navbar .nav-links a:hover {
  text-decoration: underline;
}
</style>
