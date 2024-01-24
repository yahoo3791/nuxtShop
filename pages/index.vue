<template>
        <noscript>
          <p>此網頁需要支援 JavaScript 才能正確運行，請先至你的瀏覽器設定中開啟 JavaScript。</p>
          <p>We're sorry but DESSERT shop doesn't work properly without JavaScript enabled. Please enable it to continue.</p>
        </noscript>
  <FrontNavbar />
  <div class="wrapper">
    <!-- <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
        <div :class="classObject"></div>
        <NuxtLink to="/about">关于</NuxtLink> -->
    <!-- <div class="text-danger">
            
            {{ data.hello }}
        </div> -->
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :loop="false"
      :effect="'creative'"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :navigation="true"
      :pagination="true"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="slide in 2" :key="slide">
        <a href="#" title="點擊前往商品頁">
            <div class="position-absolute top-50 start-50 translate-middle">
                <span class="badge bg-warning text-dark fs-6 mb-3"> 全站免運費中 </span>
                <h2 class="fs-2 fw-bold sologan-bg-color">與顧客傳承三十年的老味道</h2>
            </div>
            <img class="w-100 h-100 object-fit-cover object-position-center" src="../assets/images/banner/homeBanner.png" alt="店面陳列示意圖">
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
  <FrontFooter />
</template>
