<script setup>
</script>
<template>
  <div class="about-view">
    <h1>About</h1>
    <p>This is a simple task management app built with Vue 3 and Vue Router.</p>
    <nav class="page-nav">
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/stats">Stats</RouterLink>
    </nav>
  </div>
</template>
<style scoped>
.about-view {
  max-width: 680px;
  margin: 40px auto;
  padding: 28px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', Arial, sans-serif;
  background: rgba(255, 255, 255, 0.74);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.12),
              0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.7);
}
h1 {
  margin-bottom: 16px;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.4px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
p {
  color: #4A5568;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
}
.page-nav {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}
.page-nav a {
  color: #7c3aed;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 2px;
  transition: all 0.2s;
}
.page-nav a:hover {
  color: #5b21b6;
}
.page-nav a.router-link-active {
  color: #1B2A4A;
  border-bottom: 2px solid #a78bfa;
}
</style>