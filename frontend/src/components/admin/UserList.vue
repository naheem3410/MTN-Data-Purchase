<template>
  <div class="user-list-container">
    <h2>User List</h2>
    <table class="user-list-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{ user.username }}</td>
          <td>
            <router-link :to="'/admin/users/' + user._id" class="btn-view">View</router-link>
            <button @click="deleteUser(user._id)" class="btn-delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/users');
      console.log('Users fetched successfully:', response.data);
      this.users = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
  methods: {
    async deleteUser(userId) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/users/${userId}`);
        console.log('User deleted successfully');
        this.users = this.users.filter(user => user._id !== userId);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
  },
};
</script>

<style scoped>
.user-list-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.user-list-table {
  width: 100%;
  border-collapse: collapse;
}

.user-list-table th,
.user-list-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
}

.user-list-table th {
  background-color: #f4f4f4;
  color: #333;
}

.user-list-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.user-list-table tr:hover {
  background-color: #f1f1f1;
}

.btn-view, .btn-delete {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-view {
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
}

.btn-view:hover {
  background-color: #45a049;
}

.btn-delete {
  background-color: #f44336;
  color: white;
}

.btn-delete:hover {
  background-color: #d32f2f;
}
</style>
