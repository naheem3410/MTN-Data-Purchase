<!-- src/components/admin/AdminDashboard.vue -->
<template>
  <div>
    <h1>Admin Dashboard</h1>
    <nav>
      <ul>
        <li><router-link to="/admin/users">User Management</router-link></li>
        <li><router-link to="/admin/purchases">Data Purchase Management</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
};
</script>

<style scoped>
h1 {
  text-align: center;
}
nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
}
nav li {
  margin: 0 15px;
}
</style>
