<script setup>
const tutorials = [
    {
        name: "Tutorial Gelang Manik Pemula",
        url: "https://youtu.be/o_2MAx-z_x4?feature=shared",
    },
    {
        name: "Tutorial Gelang Serut",
        url: "https://youtu.be/Wnev_-zXtnU?feature=shared",
    },
    {
        name: "Tutorial Gelang Manik Kawat",
        url: "https://youtube.com/shorts/BLOxslW9QnQ?feature=shared",
    },
];
</script>

<template>
    <div class="tutorial-list">
        <h2>Tutorial Youtube</h2>
        <div class="tutorial-items">
            <div v-for="(tutorial, index) in tutorials" :key="index" class="tutorial-item">
                <a :href="tutorial.url" target="_blank" rel="noopener noreferrer" class="tutorial-link">{{ tutorial.name }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tutorial-list {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.tutorial-list h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: rgb(164, 64, 97);
}

.tutorial-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tutorial-item {
  background-color: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
}

.tutorial-link {
  color: palevioletred;
  text-decoration: none;
  font-weight: 600;
  flex-grow: 1;
  transition: color 0.3s ease;
}

.tutorial-link:hover {
  color: rgb(164, 64, 97);
  text-decoration: underline;
}
</style>