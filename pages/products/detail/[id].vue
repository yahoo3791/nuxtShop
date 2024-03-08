<script setup>
const product = ref();
const config = useRuntimeConfig();
const public_api = config.public.api;
const public_path = config.public.path;
const route = useRoute();
const id = route.params.id;
const data = await useFetch(
  `${public_api}api/${public_path}/product/${id}`
).then((res) => {
  product.value = res.data.value.product;
});

const qty = ref(1);
const changeQty = (e) => {
  switch (e.target.outerText) {
    case "+":
      if (qty.value >= 50) {
        return;
      } else {
        qty.value++;
      }
      break;
    case "-":
      if (qty.value <= 1) {
        return;
      } else {
        qty.value--;
      }
      break;
    default:
      return;
  }
};
const Loading = ref(true);

const addCart = (item, e) => {
  if (e.key == "Enter" || e.type == "click") {
    Loading.value = false;
    const data = {
      product_id: product.value.id,
      qty: qty.value,
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
        qty.value = 1;
      })
      .catch((res) => {
        Loading.value = true;
        ElMessage({
          message: res.message,
          type: "error",
        });
        qty.value = 1;
      });
  }
};
</script>
<template>
  <el-table
    class="position-fixed w-100 h-100 bg-dark opacity-25"
    v-loading="true"
    :class="{ 'd-none': Loading }"
    style="z-index: 10000"
  ></el-table>
  <FrontNavbar />
  <div class="container">
    <div class="row align-items-center">
      <div class="col-10">
        <a
          class="accesskey position-absolute no-print start-0"
          href="#"
          title="主要內容區"
          accesskey="C"
          id="content"
          >:::</a
        >
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            ><a href="/nuxtShop/" title="首頁">首頁</a></el-breadcrumb-item
          >
          <el-breadcrumb-item
            ><a href="/nuxtShop/products/all" title="商品">商品</a></el-breadcrumb-item
          >
          <el-breadcrumb-item>內容</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="col-2 text-end">
        <a
          href="javascript:;"
          class="text-decoration-none text-nowrap"
          @click="$router.back()"
          title="返回"
          >返回</a
        >
      </div>
    </div>
    <div class="row justify-content-between align-items-center">
      <div class="col-12 col-md-4">
        <img
          :src="product.imageUrl"
          class="w-100 h-100"
          :alt="`${product.title}圖示`"
        />
      </div>
      <div
        class="col-12 col-md-7 offset-md-1 d-flex flex-column justify-content-between"
      >
        <h2 class="fs-3 fw-bold">
          <span
            class="badge bg-danger"
            v-if="product.num <= 5 && product.num >= 1"
            >HOT
          </span>
          <span
            class="badge bg-secondary opacity-50"
            v-else-if="product.num === 0"
            >SOLD OUT
          </span>
          {{ product.title }}
        </h2>
        <p class="py-3">尺寸:{{ product.unit }}</p>
        <p>
          <del>原價{{ product.origin_price }}$</del
          ><span class="fs-4">優惠價{{ product.price }}$</span>
        </p>
        <div class="d-flex align-items-center justify-content-between mt-2">
          <div class="d-flex align-items-center my-3">
            <a
              href="javascript:;"
              @click="changeQty($event)"
              @keypress="changeQty($event)"
              class="num-btn p-2 text-white"
              title="減少"
            >
              -
            </a>
            <label for="num" class="d-block h-100">
              <input
                id="num"
                name="num"
                type="text"
                min="1"
                style="max-width: 120px"
                class="num-centerbtn py-2 bg-dark text-white"
                @change="updateQty(item.id, key)"
                :value="qty"
              />
            </label>
            <a
              href="javascript:;"
              @click="changeQty($event)"
              @keypress="changeQty($event)"
              class="num-btn p-2 text-white"
              title="增加"
            >
              +
            </a>
          </div>

          <a
            v-if="product.num >= 1"
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
        <p class="pb-1 pt-2">
          對商品有任何疑問嗎?<a href="/nuxtShop/faq" title="尋找客服人員"
            >尋找客服人員!</a
          >
        </p>
        <p>分享:</p>
        <div class="social-share" data-initialized="true">
          <a href="#" class="social-share-icon icon-facebook" data-sharer="facebook" data-url="" title="分享至facebook(另開新視窗)"></a>
          <a href="#" class="social-share-icon icon-twitter" data-sharer="twitter" data-url="" title="分享至twitter(另開新視窗)"></a>
        </div>
      </div>
      <div class="col-12 col-md-9 my-5">
        <h3 class="fs-4">內容:</h3>
        <p>{{ product.content }}</p>
        <h3 class="fs-4 mt-2">成份:</h3>
        <p>{{ product.description }}</p>
        <h3 class="fs-4 mt-2">保存方式最佳賞味期限:</h3>
        <p>
          可冷藏保存1週，冷凍保存2週。請見商品標示日期。<br />
          建議放入冷藏前請將蛋糕用保鮮盒密封好，再存放食用前於室溫回溫20-30分鐘風味更佳！開封後請儘速食用完畢。<br />
          餅乾：常溫密封約可保存2週，冷凍密封約可保存2-3個月，回溫即可食用。<br />
          蛋糕：放置冷藏約可保存5天。<br />
          慕斯：密封冷藏約可保存2-3天，密封冷凍約可保存7-10天，回溫即可食用。
        </p>
      </div>
    </div>
  </div>
  <FrontFooter />
</template>
