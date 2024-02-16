<script setup lang="ts">
const store = useStore(); // Same as useState('color')
const { data } = useFetch("/api/carts");
</script>

<template>
  <FrontNavbar />
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
          <el-breadcrumb-item>購物車</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="col-12 my-4 text-end">
        <button
          type="button"
          class="btn btn-light fw-bold"
          @click="deleteCarts"
          title="刪除全部"
        >
          刪除全部
        </button>
      </div>
    </div>
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
          <img :src="item.imageUrl" class="card-img-top" :alt="item.imageUrl" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <div class="card-text">
              {{ item.unit }}<br />單價{{ item.price }}$ / 小計{{
                item.price * item.num
              }}$<br />
              <div class="d-flex align-items-center my-3">
                <a
                  href="javascript:;"
                  @click="min(item.id, key)"
                  @keydown="min(item.id, key)"
                  class="num-btn p-2"
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
                    class="num-centerbtn py-2"
                    @change="updateQty(item.id, key)"
                    :value="item.num"
                    :title="item.num"
                  />
                </label>
                <a
                  href="javascript:;"
                  @click="add(item.id, key)"
                  @keydown="add(item.id, key)"
                  class="num-btn p-2"
                  title="增加"
                >
                  +
                </a>
              </div>
            </div>
            <a href="#" class="btn btn-danger" title="移除購物車">移除購物車</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row pb-5">
      <div class="col-12 text-end">
        <button
          type="button"
          class="btn btn-light fw-bold"
          @click="contactMethod"
          title="去買單"
        >
          去買單 (1)
        </button>
      </div>
    </div>
  </div>
  <!-- <DeleteCartsAll @checkDeleteAll="deleteCarts" /> -->
  <!-- <DeleteCarts @checkDelete="delet" /> -->
  <FrontFooter />
</template>
