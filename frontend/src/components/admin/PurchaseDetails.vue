<!-- src/components/admin/PurchaseDetails.vue -->
<template>
  <div>
    <h2>Purchase Details</h2>
    <p>Purchase ID: {{ purchase._id }}</p>
    <p>User ID: {{ purchase.userId }}</p>
    <p>Amount: {{ purchase.amount }}</p>
    <p>Date: {{ new Date(purchase.date).toLocaleDateString() }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      purchase: null,
    };
  },
  async created() {
    const purchaseId = this.$route.params.purchaseId;
    const response = await axios.get(`http://localhost:5000/api/admin/purchases/${purchaseId}`);
    this.purchase = response.data;
  },
};
</script>
