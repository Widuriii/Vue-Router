<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="app-header">
    <h1 class="header">WeBeads.com</h1>
  </header>

  <div class="container">
    <aside class="sidebar">
      <h1 class="logo">Menu</h1>
      <nav class="nav">
        <RouterLink to="/" class="nav-link">Dashboard</RouterLink>
        <RouterLink to="/shop" class="nav-link">Shop</RouterLink>
        <RouterLink to="/tutorial" class="nav-link">Tutorial</RouterLink>
        <RouterLink to="/about" class="nav-link">About Us</RouterLink>
      </nav>
    </aside>

    <main class="content">
      <RouterView />
    </main>
  </div>

  <footer>
    <p>Widuri-233510403</p>
    <p>Pemrograman Berbasis Komponen</p>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.app-header {
  text-align: center;
  top: 0;
  left: 0;
  padding: 0.2rem 1rem;
  background-color: palevioletred;
  border-bottom-right-radius: 6px;
  font-family: 'Dancing Script';
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.header{
  color: white;
}

.container {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 220px;
  background-color: rgb(163, 57, 92);
  color: white;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.nav-link:hover {
  background-color: rgb(109, 32, 58);
}

.router-link-exact-active {
  background-color: rgb(109, 32, 58);
}

.content {
  flex: 1;
  padding: 30px;
  background-color: #f5f5f5;
}

footer {
  background-color: palevioletred;
  color: white;
  font-family: 'Playfair Display', serif;
  bottom: 0;
  left: 0;
  text-align: center;
  padding: 10px;
}

footer p {
  margin: 0;
}
</style>
