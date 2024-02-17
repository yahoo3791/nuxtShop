<script setup lang="ts">
const route = useRoute();

// let products: globalThis.Ref<{}>

const config = useRuntimeConfig();
const public_api = config.public.api;
const public_path = config.public.path;
// ${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all

const getProducts = ref();
const data = useFetch(`${public_api}api/${public_path}/products/all`).then(
  (res) => {
    getProducts.value = res.data.value.products;
    getbreadcrumb();
  }
);
// const getData = async () => {
// const api = `${public_api}api/${public_path}/products/all`;
// const data = await useFetch(api).then(res => {
//   console.log(res);
// })
// let urlId = route.params.id;
// };
const breadcrumbName = ref("全部");
const getbreadcrumb = () => {
  switch (route.params.id) {
    case "cake":
      breadcrumbName.value = "蛋糕";
      filterProducts("蛋糕");
      break;
    case "chocolate":
      breadcrumbName.value = "巧克力";
      filterProducts("巧克力");
      break;
    case "brownie":
      breadcrumbName.value = "布朗尼";
      filterProducts("布朗尼");
      break;
    case "cupcake":
      breadcrumbName.value = "杯子蛋糕";
      filterProducts("杯子蛋糕");
      break;
    case "all":
      breadcrumbName.value = "全部商品";
      filterProducts("");
      break;
    default:
      return;
  }
};
const filterProducts = (keyword) => {
  getProducts.value = getProducts.value.filter((item) =>
    item.category.match(keyword)
  );
};
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
  // getbreadcrumb();
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
  <div class="container">
    <div class="row">
      <div class="col-12">
        <a
          class="accesskey position-absolute no-print start-0"
          href="#"
          title="主要內容區"
          accesskey="C"
          id="content"
          >:::</a
        >
        <!-- 麵包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            ><a href="/" title="首頁">首頁</a></el-breadcrumb-item
          >
          <el-breadcrumb-item>商品</el-breadcrumb-item>
          <el-breadcrumb-item>{{ breadcrumbName }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="col-12">
        <img
          src="@/assets/images/banner/productBanner.png"
          class="w-100 productBanner"
          alt=""
        />
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <i class="bi bi-search d-inline-block pe-2 fs-4" />
            <label for="search">
              <input
                type="text"
                name="search"
                class="w-100 border-0 bg-dark text-white border-bottom"
                placeholder="查詢商品"
                title="查詢商品"
              />
            </label>
          </div>
          <div
            class="ps-3 px-md-0 d-flex flex-wrap justify-content-end align-items-center my-3"
          >
            <label for="sort" class="pe-2 pe-md-0 pb-md-1"
              >顯示方法
              <div class="d-inline-block" style="max-width: 300px">
                <select
                  name="sort"
                  id="sort"
                  class="bg-dark text-white px-4 py-1 border-0 border-bottom"
                  title="選擇顯示方法"
                  @change="onChange($event)"
                >
                  <option disabled="disabled" value="">選擇顯示方法</option>
                  <option value="熱銷商品" title="熱銷商品">熱銷商品</option>
                  <option value="價格排序低到高" title="價格排序低到高">
                    價格排序低到高
                  </option>
                  <option value="價格排序高到低" title="價格排序高到低">
                    價格排序高到低
                  </option>
                </select>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <div
        class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-5"
        v-for="item in getProducts"
        :key="item.id"
      >
        <div
          class="card text-black"
          @click="more(item.id)"
          @keydown="more(item.id)"
        >
          <img :src="item.imageUrl" class="card-img-top" :alt="item.imageUrl" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>
            <a href="#" class="btn btn-primary" title="加入購物車"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrontFooter />
</template>
