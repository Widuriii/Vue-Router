<script setup>
import { ref, computed } from "vue";

const categories = ['manik', 'benang', 'charm', 'kawat', 'gelang', 'ganci'];
const selectedCategory = ref('manik');
const cart = ref([]);

const allItems = {
    manik: [{name : 'Manik Kaca(Glass beads)'}, {name : 'Manik Plastik/Akrilik'}, {name : 'Manik Batu Alam'}],
    benang: [{name : 'Benang Nilon'}, {name : 'Tali Giok'}, {name : 'Benang Tali Pancing'}],
    charm: [{name : 'Charm Karakter'}, {name : 'Charm Huruf'}],
    kawat: [{name : 'Kawat Tembaga'}, {name : 'Kawat Stainless'}],
    gelang: [{name : 'Gelang Tali Serut'}, {name : 'Gelang Kawat'}, {name : 'Gelang Charm'}],
    ganci: [{name : 'Ganci Manik'}, {name : 'Ganci Charm'}, {name : 'Ganci Kombinasi'}],
};

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function selectCategory(cat) {
    selectedCategory.value = cat;
}

const filteredItems = computed(() => {
    return allItems[selectedCategory.value] || [];
});

function addToCart(item) {
    cart.value.push(item);
}

function removeFromCart(index) {
    cart.value.splice(index, 1);
}

function checkout() {
    alert (`Checkout bberhasil! Total Item: ${cart.value.length}`);
    cart.value = [];
}
</script>

<template>
    <div class="ShopContainer">
        <nav class="navbar">
            <ul class="kategori">
                <li v-for="cat in categories" :key="cat">
                <button @click="selectCategory(cat)"
                :class="{ active: cat === selectedCategory.value}"
                >
                {{ capitalize(cat) }}
                </button>
                </li>
            </ul>
        </nav>

        <div class="Produk">
            <main>
                <h2 class="JudulKategori">Kategori: {{ capitalize(selectedCategory) }}</h2>

                <div class="GridProduk">
                    <div
                    v-for="(item, index) in filteredItems"
                    :key="index"
                    class="ItemProduk">
                
                    <p class="NamaProduk">{{ item.name }}</p>
                    <button @click="addToCart(item)" class="BtnTambah">Tambah ke Keranjang</button>    
                </div>
                </div>
            </main>

            <aside class="Keranjang">
                <h3 class="JudulKeranjang">Keranjang</h3>

                <div v-if="cart.length === 0" class="Keranjang Kosong">Keranjang Kosong</div>

                <ul v-else class="ListKernajang">
                    <li v-for="(item, index) in cart" :key="index" class="ItemKeranjang">
                        <span>{{ item.name }}</span>
                        <button @click="removeFromCart(index)" class="BtnHapus" aria-label="Hapus Item">
                            &times;
                        </button>
                    </li>
                </ul>
                <button v-if="cart.length > 0" @click="checkout" class="BtnChekout">Checkout</button>
            </aside>
        </div>
    </div>
</template>