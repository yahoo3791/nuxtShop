<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);

// let products: globalThis.Ref<{}>

// const config = useRuntimeConfig();
// const public_api = config.public.api;
// const public_path = config.public.path;
const { data } = useFetch("/api/products");
// const getData = async () => {
// const api = `${public_api}api/${public_path}/products/all`;
// const data = await useFetch(api).then(res => {
//   changeProducts.value = res.data.value.products;
//   console.log(res);
// })
// let urlId = route.params.id;
// };
const renderCarts = () => {};
const addCart = (item, e) => {};
const addFav = (item) => {};
const productHistory = (id) => {};
const more = (id) => {};
const updateFav = () => {};
const onChange = (e) => {};
const searchProducts = () => {};

onMounted(() => {
  // getData();
  // updateFav();
});

// const updateProducts = computed(() => {
//   let arr = [];
//   arr = products.value;
//   if (clickName.value === "價格排序低到高") {
//     arr.sort((a, b) => a.price - b.price);
//   } else if (clickName.value === "價格排序高到低") {
//     arr.sort((a, b) => b.price - a.price);
//   } else if (clickName.value === "熱銷商品") {
//     arr.sort((a, b) => a.num - b.num);
//   }
//   return arr;
// });

// watch(cartsNum, () => {
//   renderCarts();
// });
// watch(message, () => {
//   searchProducts();
// });
</script>

<template>
  <FrontNavbar />
  <a
    class="accesskey position-absolute no-print start-0"
    href="#"
    title="主要內容區"
    accesskey="C"
    id="content"
    >:::</a
  >
  <div class="container-fluid pt-utility auto-height">
    <div class="row auto-height-content">
      <div class="col-12 col-md-9 mx-auto p-0">
        <div class="position-relative">
          <img
            src="@/assets/images/banner/productBanner.png"
            class="w-100 productBanner"
            alt="全部商品圖片"
          />
        </div>
      </div>
      <div
        class="col-12 col-md-9 mx-auto p-0 d-flex align-items-center justify-content-between"
      >
        <div>
          <i
            class="bi bi-search d-inline-block px-2 fs-4 cursor-pointer"
            @click="search = !search"
            @keypress="search = !search"
          />
          <label for="search">
            <input
              type="text"
              name="search"
              v-model="message"
              :class="{ 'd-none': search }"
              class="carts-input w-100 border-0 border-bottom text-white"
            />
          </label>
        </div>
        <div
          class="ps-3 px-md-0 d-flex flex-wrap justify-content-end align-items-center my-3"
        >
          <label
            for="sort"
            class="text-white tracking-wide font-medium pe-2 pe-md-0 pb-md-1 d-inline-block"
            >顯示方法
            <div
              class="bg-white d-inline-block"
              style="max-width: 300px; border-radius: 5px"
            >
              <select
                name="sort"
                id="sort"
                class="text-black tracking-wide font-medium px-4 py-1 border-0"
                @change="onChange($event)"
              >
                <option
                  selected="selected"
                  disabled="disabled"
                  class="d-n"
                  value=""
                >
                  選擇顯示方法
                </option>
                <option value="熱銷商品">熱銷商品</option>
                <option value="價格排序低到高">價格排序低到高</option>
                <option value="價格排序高到低">價格排序高到低</option>
              </select>
            </div>
          </label>
        </div>
      </div>
      <div class="col-12 col-md-9 mx-auto">
        <div class="row">
          <div
            class="col-6 col-md-6 col-lg-4 col-xl-3 mb-5"
            v-for="item in data"
            :key="item.id"
          >
            <div
              class="card text-black"
              style="width: 18rem"
              @click="more(item.id)"
              @keydown="more(item.id)"
            >
              <img
                :src="item.imageUrl"
                class="card-img-top"
                :alt="item.imageUrl"
              />
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.content }}</p>
                <a href="#" class="btn btn-primary">加入購物車</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrontFooter />
</template>
