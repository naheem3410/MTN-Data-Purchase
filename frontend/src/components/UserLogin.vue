<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p class="register-link">
      Don't have an account? <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async login() {
      console.log('Login function called');
      console.log('Sending data:', {
        username: this.username,
        password: this.password
      });
      try {
        const response = await axios.post('http://localhost:5000/api/users/login', {
          username: this.username,
          password: this.password
        });
        console.log('Login successful:', response.data);
        // Redirect to user dashboard
        this.$router.push('/user-dashboard');
      } catch (error) {
        console.error('Error logging in:', error);
        if (error.response) {
          this.errorMessage = error.response.data;
        } else {
          this.errorMessage = 'Error logging in';
        }
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  margin-top: 50px; /* Added top margin */
}

h2 {
  text-align: center;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: orange; /* Changed button color to orange */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkorange; /* Slightly darker orange on hover */
}

.error-message {
  color: red;
  text-align: center;
}

.register-link {
  text-align: center;
  margin-top: 20px;
}

.register-link a {
  color: blue;
  text-decoration: underline;
}
</style>
