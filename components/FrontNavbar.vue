<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
const input = ref("");
const order = () => {
  console.log("123213");
};
</script>

<template>
  <a class="accesskey content" href="#content" title="跳到主要內容區"
    >跳到主要內容區</a
  >
  <nav class="navbar navbar-expand-lg bg-body-tertiary text-white">
    <div class="container-fluid">
      <h1>
        <a class="navbar-brand fs-1" href="/nuxtShop" title="DESSERT">DESSERT</a>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a
          class="accesskey position-absolute"
          href="javascript:;"
          title="上方選單區"
          accesskey="U"
          >:::</a
        >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/nuxtShop/" title="首頁"
              >首頁</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/nuxtShop/faq" title="聯絡我們">聯絡我們</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/nuxtShop/products"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="商品"
            >
              商品
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/nuxtShop/products/cake" title="蛋糕"
                  >蛋糕</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="/nuxtShop/products/chocolate"
                  title="巧克力"
                  >巧克力</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="/nuxtShop/products/brownie" title="布朗尼"
                  >布朗尼</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="/nuxtShop/products/cupcake"
                  title="杯子蛋糕"
                  >杯子蛋糕</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a
                  class="dropdown-item"
                  href="/nuxtShop/products/all"
                  title="全部商品"
                  >全部商品</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/nuxtShop/carts/cartView" title="購物車">購物車</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/nuxtShop/favorite" title="收藏">收藏</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <el-input
            class="me-2"
            v-model="input"
            type="text"
            placeholder="查詢訂單"
            aria-label="Search"
            title="輸入訂單編號"
            clearable
          />
          <el-button :icon="Search" circle title="查詢" @click="order" />
        </form>
      </div>
    </div>
  </nav>
</template>
