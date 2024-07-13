<template>
    <div class="data-purchase">
      <h1>Select Data Package</h1>
      <form @submit.prevent="submitPurchase">
        <div class="form-group">
          <label for="dataPackage">Choose a package:</label>
          <select id="dataPackage" v-model="selectedPackage" class="form-control">
            <option value="200MB">200MB</option>
            <option value="500MB">500MB</option>
            <option value="1GB">1GB</option>
            <option value="4GB">4GB</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'DataPurchase',
    data() {
      return {
        selectedPackage: '',
      };
    },
    methods: {
      async submitPurchase() {
        const payload = {
          package: this.selectedPackage,
          userId: this.$route.params.userId, // Fetch userId from route params
        };
  
        console.log('Sending payload:', payload);
  
        try {
          const response = await axios.post('http://localhost:5000/api/purchases', payload);
          console.log('Purchase successful:', response.data);
          alert('Purchase successful!');
        } catch (error) {
          console.error('Error making purchase:', error);
          alert('Error making purchase.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .data-purchase {
    text-align: center;
    margin-top: 50px;
  }
  
  .form-group {
    margin-bottom: 20px;
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
  