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
    alert (`Checkout berhasil! Total Item: ${cart.value.length}`);
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

                <div v-if="cart.length === 0" class="KeranjangKosong">Keranjang Kosong</div>

                <ul v-else class="ListKeranjang">
                    <li v-for="(item, index) in cart" :key="index" class="ItemKeranjang">
                        <span>{{ item.name }}</span>
                        <button @click="removeFromCart(index)" class="BtnHapus" aria-label="Hapus Item">
                            &times;
                        </button>
                    </li>
                </ul>
                <button v-if="cart.length > 0" @click="checkout" class="BtnCheckout">Checkout</button>
            </aside>
        </div>
    </div>
</template>

<style scoped>
.ShopContainer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.navbar {
  background-color: #f9fafb;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.kategori {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.kategori button {
  background: none;
  border: none;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  color: #374151;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
  border-radius: 4px 4px 0 0;
}

.kategori button:hover,
.kategori button:focus {
  color: palevioletred;
  outline: none;
}

.kategori button.active {
  color: palevioletred;
  border-bottom-color: palevioletred;
  font-weight: 700;
}

.Produk {
  display: flex;
  gap: 1.5rem;
}

main {
  flex: 1;
}

.JudulKategori {
  margin-bottom: 1rem;
}

.GridProduk {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.ItemProduk {
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.NamaProduk {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.BtnTambah {
  padding: 0.5rem 0.75rem;
  background-color: palevioletred;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.BtnTambah:hover {
  background-color: rgb(164, 64, 97);
}

.Keranjang {
  width: 320px;
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 1rem;
  height: fit-content;
}

.JudulKeranjang {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.KeranjangKosong {
  color: #6b7280;
}

.ListKeranjang {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 24rem;
  overflow-y: auto;
}

.ItemKeranjang {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

.BtnHapus {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #dc2626;
  font-weight: bold;
  cursor: pointer;
}

.BtnHapus:hover {
  color: #b91c1c;
}

.BtnCheckout {
  margin-top: 1rem;
  width: 100%;
  background-color: palevioletred;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.BtnCheckout:hover {
  background-color: rgb(164, 64, 97);
}

@media (max-width: 768px) {
  .Produk {
    flex-direction: column;
  }

  .Keranjang {
    width: 100%;
    position: relative;
    top: auto;
    margin-top: 1.5rem;
  }
}
</style>