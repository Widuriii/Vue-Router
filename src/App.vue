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

</style>
