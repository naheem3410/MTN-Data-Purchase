<!-- src/components/admin/UserDetails.vue -->
<template>
  <div>
    <h2>User Details</h2>
    <p>Username: {{ user.username }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const userId = this.$route.params.userId;
    const response = await axios.get(`http://localhost:5000/api/admin/users/${userId}`);
    this.user = response.data;
  },
};
</script>
