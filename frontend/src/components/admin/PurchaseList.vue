<!-- src/components/admin/PurchaseList.vue -->
<template>
  <div>
    <h2>Purchase List</h2>
    <table>
      <thead>
        <tr>
          <th>Purchase ID</th>
          <th>User ID</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="purchase in purchases" :key="purchase._id">
          <td>{{ purchase._id }}</td>
          <td>{{ purchase.userId }}</td>
          <td>{{ purchase.amount }}</td>
          <td>{{ new Date(purchase.date).toLocaleDateString() }}</td>
          <td>
            <router-link :to="'/admin/purchases/' + purchase._id">View</router-link>
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
      purchases: [],
    };
  },
  async created() {
    const response = await axios.get('http://localhost:5000/api/admin/purchases');
    this.purchases = response.data;
  },
};
</script>
