<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary text-white">
    <div class="container-fluid">
      <h1>
        <a class="navbar-brand fs-1" href="#" title="DESSERT">DESSERT</a>
      </h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" title="首頁">首頁</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" title="聯絡我們">聯絡我們</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="商品">
              商品
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" title="蛋糕">蛋糕</a></li>
              <li><a class="dropdown-item" href="#" title="巧克力">巧克力</a></li>
                <li><a class="dropdown-item" href="#" title="布朗尼">布朗尼</a></li>
                <li><a class="dropdown-item" href="#" title="杯子蛋糕">杯子蛋糕</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" title="熱門主打">熱門主打</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" title="購物車">購物車</a>
          </li>
                    <li class="nav-item">
              <a class="nav-link" href="#" title="收藏">收藏</a>
            </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="查詢訂單" aria-label="Search" title="輸入訂單編號">
          <button class="btn btn-outline-success text-nowrap" type="submit" title="查詢">查詢</button>
        </form>
      </div>
    </div>
  </nav>
</template>
