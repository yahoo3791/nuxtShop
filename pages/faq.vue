<script setup lang="ts">
useHead({
  title: "聯絡我們",
  meta: [
    {
      name: "description",
      content: `【反詐騙提醒】 近來詐騙猖獗，行騙手法也不斷更新，提醒您：本司不會以任何名義透過電話、 簡訊或Email等方式核對銀行帳戶、信用卡卡號等私人資訊【公告】 2022年1月1日起已開始使用環保回收購物袋，如需使用紙袋將進行紙袋收費-我們與您一同實踐環保減廢活動【活動】電子優待券及促銷說明：您在結帳時輸入coupon012，可以獲得我們目前的折扣、 特別提供與交易。我們也將最新的電子優惠卷郵寄給我們的訂閱者，快去訂閱享受折扣。`,
    },
  ],
});
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
          <el-breadcrumb-item>聯絡我們</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 寄送表單聯絡我們 -->
      <div class="col-12 col-md-5">
        <h2 class="fs-3">
          寄送表單聯絡我們<span class="fs-5"> *皆為必填</span>
        </h2>
        <Form>
          <label for="name" class="d-block py-3">
            <h3>*聯絡人姓名</h3>
            <input
              type="text"
              name="name"
              id="name"
              class="w-100 p-2"
              placeholder="填寫聯絡人姓名"
              title="填寫聯絡人姓名"
            />
          </label>
          <div class="py-3">
            <h3>*性別</h3>
            <label for="male" title="男">
              <input
                type="radio"
                name="gendor"
                id="male"
                value="male"
                checked
              />
              男
            </label>
            <label class="ms-2" for="female" title="女">
              <input type="radio" name="gendor" id="female" value="female" />
              女
            </label>
          </div>
          <label for="email" class="d-block py-3">
            <h3>*聯絡人信箱</h3>
            <input
              id="email"
              type="email"
              class="w-100 p-2"
              placeholder="填寫聯絡人信箱"
              title="填寫聯絡人信箱"
            />
          </label>
          <label for="phone" class="d-block py-3">
            <h3>*聯絡人手機</h3>
            <input
              id="phone"
              type="email"
              class="w-100 p-2"
              placeholder="填寫聯絡人手機"
              title="填寫聯絡人手機"
            />
          </label>
          <label for="textarea" class="d-block py-3">
            *留言區
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              class="d-block w-100 p-2"
              placeholder="留下疑問或需求"
              title="留下疑問或需求"
              maxlength="300"
            />
          </label>
          <a
            type="submit"
            class="btn btn-light mb-5 mt-2"
            title="寄送"
            href="javascript:;"
          >
            寄送
          </a>
        </Form>
      </div>
      <!-- 常見問題 -->
      <div class="col-12 col-md-6 offset-md-1">
        <h2 class="fs-3 pb-3">常見問題</h2>
        <div class="accordion mb-5" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h3 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                title="到貨時間"
              >
                到貨時間
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <p>下單後4天內送達，未與時間如期送達贈與現金回饋補償</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                title="退換貨說明"
              >
                退換貨說明
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                <p>
                  請注意！請務必詳閱商品說明並再次確認確有購買該項商品之需求及意願時始下單購買，有任何疑問並請先聯繫客服詢問
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                title="當付款失敗時"
              >
                當付款失敗時
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse rounded-0"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                <p>
                  請確認付款失敗原因後，先與發卡行聯繫，或更換其他信用卡進行付款。
                  另您可於付款失敗頁面點選「重新付款」進行後續刷卡流程，付款是否成功將再發函通知，
                  您屆時亦可至會員專區進行查詢訂單完成後30分鐘內，未付款成功，
                  系統將自動取消訂單，建議您可重新完成訂單後再進行支付。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="panelsStayOpen-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                title="目前付款方式"
              >
                目前付款方式
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
                <p>
                  1.線上刷卡：使用信用卡(VISA、MASTER、JCB)即時線上刷卡，馬上就可以付款完成。<br />
                  2.超商取貨付款
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="panelsStayOpen-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
                title="實體店面說明"
              >
                實體店面說明
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div class="accordion-body">
                <p>
                  目前沒有實體店面喔！只經營網路商店，有設置實體客服中心並合法營業登記。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="panelsStayOpen-headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix"
                title="如果我的收件資料需要變更怎麼辦呢？"
              >
                如果我的收件資料需要變更怎麼辦呢？
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingSix"
            >
              <div class="accordion-body">
                <p>在商品訂單尚未通知「商品已出貨」前皆可通知客服進行更改。</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="panelsStayOpen-headingSeven">
              <button
                class="accordion-button collapsed rounded-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSeven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSeven"
                title="購買金額達多少以上可免運費？"
              >
                購買金額達多少以上可免運費？
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseSeven"
              class="accordion-collapse collapse rounded-0"
              aria-labelledby="panelsStayOpen-headingSeven"
            >
              <div class="accordion-body">
                <p>歡慶開幕目前皆為免運費！！</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="panelsStayOpen-headingEight">
              <button
                class="accordion-button collapsed rounded-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseEight"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseEight"
                title="已完成訂購後，如需修改商品數量，是否可於網上直接修改訂單？"
              >
                已完成訂購後，如需修改商品數量，是否可於網上直接修改訂單？
              </button>
            </h3>
            <div
              id="panelsStayOpen-collapseEight"
              class="accordion-collapse collapse rounded-0"
              aria-labelledby="panelsStayOpen-headingEight"
            >
              <div class="accordion-body">
                <p>在商品訂單尚未通知「商品已出貨」前皆可通知客服進行更改。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FrontFooter />
</template>
