<template>
  <div class="home-container">
    <header class="hero-section">
      <h1>Welcome to the MTN Data Purchase Platform</h1>
      <p class="subtitle">Your one-stop solution for buying MTN data bundles effortlessly.</p>
      <router-link to="/register" class="cta-button">Get Started</router-link>
    </header>
    
    <section class="features-section">
      <h2>Why Choose Us?</h2>
      <div class="features">
        <div class="feature">
          <i class="fas fa-shield-alt"></i>
          <h3>Secure Transactions</h3>
          <p>Your data purchases are secured with the latest encryption technology.</p>
        </div>
        <div class="feature">
          <i class="fas fa-thumbs-up"></i>
          <h3>Reliable Service</h3>
          <p>We ensure a 99.9% uptime so you can always buy data when you need it.</p>
        </div>
        <div class="feature">
          <i class="fas fa-clock"></i>
          <h3>24/7 Support</h3>
          <p>Our support team is available around the clock to assist you.</p>
        </div>
      </div>
    </section>
    
    <footer class="footer-section">
      <p>&copy; 2024 MTN Data Purchase Platform. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppHome'
};
</script>

<style scoped>
.home-container {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

.hero-section {
  background: linear-gradient(135deg, #ff6600 0%, #ffcc00 100%);
  padding: 60px 20px;
  color: white;
  border-radius: 8px;
}

.hero-section h1 {
  font-size: 3em;
  margin-bottom: 10px;
  animation: fadeInDown 1s ease-in-out;
}

.hero-section .subtitle {
  font-size: 1.5em;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease-in-out;
}

.hero-section .cta-button {
  background-color: #ff6600;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2em;
  transition: background-color 0.3s ease;
}

.hero-section .cta-button:hover {
  background-color: #ffcc00;
}

.features-section {
  padding: 40px 20px;
}

.features-section h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature {
  max-width: 300px;
  text-align: center;
  margin-bottom: 20px;
}

.feature i {
  font-size: 3em;
  color: #ff6600;
  margin-bottom: 10px;
}

.feature h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.feature p {
  font-size: 1em;
  color: #666;
}

.footer-section {
  background-color: #f4f4f4;
  padding: 20px 0;
  color: #333;
}

.footer-section p {
  margin: 0;
}

/* Animations */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
