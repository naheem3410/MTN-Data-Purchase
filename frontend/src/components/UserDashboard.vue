<template>
  <div class="dashboard">
    <h1>Welcome to the Dashboard</h1>
    <button @click="goToPurchase" class="btn btn-primary">Buy MTN Data</button>
  </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  methods: {
    goToPurchase() {
      this.$router.push({ name: 'DataPurchase' });
    },
  },
};
</script>

<style scoped>
.dashboard {
  text-align: center;
  margin-top: 50px;
}

.btn {
  background-color: orange;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
