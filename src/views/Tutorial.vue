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