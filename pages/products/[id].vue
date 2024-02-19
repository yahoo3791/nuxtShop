<script setup lang="ts">
const route = useRoute();

const config = useRuntimeConfig();
const public_api = config.public.api;
const public_path = config.public.path;

const getProducts = ref();
const data = useFetch(`${public_api}api/${public_path}/products/all`).then(
  (res) => {
    getProducts.value = res.data.value.products;
    getbreadcrumb();
  }
);
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
const updateProducts = ref();
const filterProducts = (keyword) => {
  updateProducts.value = getProducts.value.filter((item) =>
    item.category.match(keyword)
  );
};
const renderCarts = () => {};
const Loading = ref(true);
const addCart = (item, e) => {
  if (e.key == "Enter" || e.type == "click") {
    Loading.value = false;
    const data = {
      product_id: item.id,
      qty: 1,
    };
    $fetch(`${public_api}api/${public_path}/cart`, {
      method: "post",
      body: { data },
    })
      .then((res) => {
        Loading.value = true;
        ElMessage({
          message: res.message,
          type: "success",
        });
      })

      .catch((res) => {
        Loading.value = true;
        ElMessage({
          message: res.message,
          type: "error",
        });
      });
  }
};
const addFav = (item) => {};
const productHistory = (id) => {};
const more = (id, e) => {
  if (e.key == "Enter" || e.type == "click") {
    useRouter().push({ path: `/products/detail/${id}` });
  }
};
const updateFav = () => {};
const onChange = (e) => {
  switch (e.target.value) {
    case "熱銷商品":
      updateProducts.value = updateProducts.value.sort((a, b) => a.num - b.num);

      break;
    case "價格排序低到高":
      updateProducts.value = updateProducts.value.sort(
        (a, b) => a.price - b.price
      );
      break;
    case "價格排序高到低":
      updateProducts.value = updateProducts.value.sort(
        (a, b) => b.price - a.price
      );

      break;
    default:
      return;
  }
};

const searchProducts = () => {
  updateProducts.value = getProducts.value.filter((item) =>
    item.title.match(message.value)
  );
  if (message.value == "") {
    getbreadcrumb();
  }
};
const message = ref("");
onMounted(() => {
  // getData();
  // updateFav();
  // getbreadcrumb();
});
// watch(cartsNum, () => {
//   renderCarts();
// });
watch(message, () => {
  searchProducts();
});
</script>

<template>
  <el-table
    class="position-fixed w-100 h-100 bg-dark opacity-25"
    v-loading="true"
    :class="{ 'd-none': Loading }"
    style="z-index: 10000"
  ></el-table>
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
          <el-breadcrumb-item
            ><a href="/products/all" title="商品">商品</a></el-breadcrumb-item
          >
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
                v-model="message"
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
                  <option selected="selected" disabled="disabled" value="">
                    選擇顯示方法
                  </option>
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
        v-for="item in updateProducts"
        :key="item.id"
      >
        <a
          href="javascript:;"
          :title="`查看${item.title}`"
          class="card text-black text-decoration-none"
          @click="more(item.id, $event)"
          @keydown="more(item.id, $event)"
        >
          <img :src="item.imageUrl" class="card-img-top" :alt="item.imageUrl" />
          <div class="card-body">
            <h5 class="card-title">
              <span
                class="badge bg-danger"
                v-if="item.num <= 5 && item.num >= 1"
                >HOT</span
              >
              <span class="badge bg-dark opacity-50" v-else-if="item.num === 0"
                >SOLD OUT</span
              >
              {{ item.title }}
            </h5>
            <p>{{ item.unit }} {{ item.price }}$</p>
            <p class="card-text">{{ item.content }}</p>
            <a
              v-if="item.num >= 1"
              @click.stop="addCart(item, $event)"
              @keydown="addCart(item, $event)"
              href="javascript:;"
              class="btn btn-primary"
              title="加入購物車"
              >加入購物車</a
            >
            <a
              v-else
              href="javascript:;"
              class="btn btn-dark opacity-50"
              title="已售完"
              >已售完</a
            >
          </div>
        </a>
      </div>
    </div>
  </div>
  <FrontFooter />
</template>
