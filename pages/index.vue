<script setup>
const { data } = useFetch("/api/foods");
const subMail = ref("");
const subEmail = () => {
  console.log(subMail.value);
  subMail.value = "";
};
const value1 = ref(5);

</script>

<template>
  <noscript>
    <p>
      此網頁需要支援 JavaScript 才能正確運行，請先至你的瀏覽器設定中開啟
      JavaScript。
    </p>
    <p>
      We're sorry but DESSERT shop doesn't work properly without JavaScript
      enabled. Please enable it to continue.
    </p>
  </noscript>
  <FrontNavbar />
  <div class="wrapper">
    <!-- <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
        <div :class="classObject"></div>
        <NuxtLink to="/about">关于</NuxtLink> -->
    <!-- <div class="text-danger">
            
            {{ data.hello }}
        </div> -->
    <!-- 輪播區塊 -->
    <Swiper
      class="swiper-banner"
      :modules="[
        SwiperAutoplay,
        SwiperEffectCoverflow,
        SwiperNavigation,
        SwiperPagination,
        SwiperKeyboard,
      ]"
      :slides-per-view="1"
      :loop="false"
      :effect="'coverflow'"
      :speed="2000"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return `<a href='javascript:;' title='第${
            index + 1
          }頁' class='${className}'><p class='sr-only'>第${
            index + 1
          }頁</p></a>`;
        },
      }"
    >
      <SwiperSlide v-for="slide in 5" :key="slide">
        <a href="#" title="點擊前往商品頁">
          <div class="position-absolute top-50 start-50 translate-middle">
            <span class="badge bg-warning text-dark fs-6 mb-3">
              全站免運費中
            </span>
            <h2 class="fs-2 fw-bold sologan-bg-color">
              與顧客共同傳承三十年的經典
            </h2>
          </div>
          <img
            class="w-100 h-100 object-fit-cover object-position-center"
            src="../assets/images/banner/homeBanner.png"
            alt="店面陳列示意圖"
          />
        </a>
        <button class="swiper-button-prev" title="上一頁">
          <p class="sr-only">上一頁</p>
        </button>
        <button class="swiper-button-next" title="下一頁">
          <p class="sr-only">下一頁</p>
        </button>
      </SwiperSlide>
    </Swiper>
    <!-- 跑馬燈區塊 -->
    <div class="marquee-container bg-dark bg-gradient">
      <p class="marquee-content fs-5">
        <strong>【反詐騙提醒】</strong
        >近來詐騙猖獗，行騙手法也不斷更新，提醒您：本司不會以任何名義透過電話、簡訊或Email等方式核對銀行帳戶、信用卡卡號等私人資訊。
      </p>
    </div>
    <!-- 種類區塊 -->
    <div class="card-title-area">
      <a
        class="accesskey position-absolute no-print start-0"
        href="#"
        title="主要內容區"
        accesskey="C"
        id="content"
        >:::</a
      >
      <h3>您所在城市的熱門點心</h3>
      <p>選擇你想要的，我們把它送給您</p>
    </div>
    <div class="container">
      <div class="row g-5">
        <div
          class="col-12 col-md-6 col-lg-3"
          v-for="card in data"
          :key="card.id"
        >
          <a
            :href="card.href"
            class="card mx-auto"
            :title="`點擊看` + card.title"
          >
            <img :src="card.src" class="card-img-top h-100" :alt="card.alt" />
            <div class="card-body">
              <h4 class="fs-5 card-title text-black text-center fw-bold mb-0">
                {{ card.title }}
              </h4>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 訂閱區塊 -->
    <div
      class="sub-bg my-10 container-fulid d-flex justify-content-center align-items-center"
    >
      <VeeForm @submit="subEmail" class="position-relative">
        <label for="subscription" class="fs-3 fw-bold">訂閱獲得即時優惠</label>
        <div class="d-flex flex-wrap justify-content-center pt-3">
          <VeeField
            type="email"
            name="email"
            id="subscription"
            placeholder="輸入Email"
            class="veefield border-0 px-2"
            title="輸入Email訂閱獲得即時優惠"
            v-model="subMail"
          />
          <button
            type="submit"
            class="border-0 px-2 ms-2 fw-bold btn btn-secondary"
            title="訂閱電子報"
          >
            訂閱
          </button>
          <VeeErrorMessage name="email" />
        </div>
      </VeeForm>
    </div>
    <!-- 徵才區塊 -->
    <div class="container text-black">
      <div class="row flex-column-reverse flex-md-row align-items-center">
        <div class="col-12 col-sm-6 mb-3 mb-sm-0">
          <div class="card-body text-white text-md-end">
            <h3 class="card-title fs-3 fw-bold">成為快遞員</h3>
            <p class="card-text pt-3 pb-4">
              作為送貨員，賺取有競爭力的薪水，工作靈活的時程表。
            </p>
            <a href="#" class="btn btn-success" title="開始賺錢">開始賺錢</a>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <img
            class="d-block mx-auto rounded"
            src="../public/images/recruit/delivery.jpg"
            alt
            style="max-width: 300px"
          />
        </div>
      </div>
      <div
        class="row flex-column-reverse flex-md-row-reverse align-items-center"
      >
        <div class="col-12 col-sm-6">
          <div class="card-body text-white">
            <h3 class="card-title fs-3 fw-bold">成為合作夥伴</h3>
            <p class="card-text pt-3 pb-4">通過吸引新客戶來發展您的業務。</p>
            <a href="#" class="btn btn-warning" title="與我們合作"
              >與我們合作</a
            >
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <img
            class="d-block mx-auto rounded"
            src="../public/images/recruit/chef.jpg"
            alt
            style="max-width: 300px"
          />
        </div>
      </div>
    </div>
    <!-- 顧客回饋 -->
    <div class="card-title-area bg-dark bg-gradient py-5">
      <h3 class="mb-5">顧客評論</h3>
      <div class="container">
        <Swiper
          class="swiper-custom"
          :modules="[SwiperAutoplay, SwiperPagination]"
          :loop="true"
          :space-between="30"
          :speed="1000"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: true,
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return `<a href='javascript:;' title='第${
                index + 1
              }筆' class='${className}'><p class='sr-only'>第${
                index + 1
              }筆</p></a>`;
            },
          }"
          :breakpoints="{
            320: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }"
        >
          <SwiperSlide v-for="slide in 10" :key="slide">
            <a href="javascript:;" title="顧客評論">
              <div class="bg-white text-black text-start px-3 py-4 mb-3">
                <el-rate v-model="value1" disabled /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, ut.
              </div>
              <div
                class="card-body d-flex align-items-center justify-content-around"
              >
                <!-- <img src="" alt="..."> -->
                <div class="border rounded-pill p-5"></div>
                <p class="card-text text-white">
                  name<br />
                  <span class="fs-6">2022/5/13</span>
                </p>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
  <FrontFooter />
</template>
