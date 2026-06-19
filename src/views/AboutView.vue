<script setup>
</script>
<template>
    <div class="about-view">
        <h1>About</h1>
        <p>Static page for task management app. </p>
        <RouterLink to="/home">Go back to Home</RouterLink>
        <RouterLink to="Stats">Stats</RouterLink>
    </div>

    </template>
<style scoped>

.about-view {
    max-width: 520px;
    margin: 40px auto;
    padding: 24px;
    font-family: Arial, sans-serif;
}

h1 {color: #1b2a4a; }
p {color: #4a5568; }
a { color: #42b883;}

.page-nav {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}
.page-nav a {
  color: #42B883;
  text-decoration: none;
  font-weight: 600;
}
.page-nav a.router-link-active {
  color: #1B2A4A;
  border-bottom: 2px solid #42B883;
  padding-bottom: 2px;
}
</style>