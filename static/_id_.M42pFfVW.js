import{E as $,a as V,v as B}from"./el-loading.18zYIJK3.js";import{_ as F,a as L}from"./FrontFooter.11OVHZyK.js";import{a as T,E as q}from"./el-breadcrumb.ETCeicgR.js";import{a as y,ae as z,I as u,a0 as D,M as l,_ as K,u as a,J as t,C as f,a1 as M,N as c,L as r,ad as O,R,V as I,q as p}from"./swiper-vue.D7OQEzaL.js";import{k as Q,b as U}from"./entry.2VKWY6l_.js";import{u as A}from"./fetch.pTmHjBRq.js";import"./aria.ClGo7ZJR.js";import"./_plugin-vue_export-helper.x3n3nnut.js";const H={class:"container"},J={class:"row align-items-center"},G={class:"col-10"},P=t("a",{class:"accesskey position-absolute no-print start-0",href:"#",title:"主要內容區",accesskey:"C",id:"content"},":::",-1),W=t("a",{href:"/nuxtShop/",title:"首頁"},"首頁",-1),X=t("a",{href:"/nuxtShop/products/all",title:"商品"},"商品",-1),Y={class:"col-2 text-end"},Z={class:"row justify-content-between align-items-center"},tt={class:"col-12 col-md-4"},et=["src","alt"],st={class:"col-12 col-md-7 offset-md-1 d-flex flex-column justify-content-between"},at={class:"fs-3 fw-bold"},ot={key:0,class:"badge bg-danger"},nt={key:1,class:"badge bg-secondary opacity-50"},it={class:"py-3"},lt={class:"fs-4"},ct={class:"d-flex align-items-center justify-content-between mt-2"},rt={class:"d-flex align-items-center my-3"},dt={for:"num",class:"d-block h-100"},ut=["value"],pt={key:1,href:"javascript:;",class:"btn btn-dark opacity-50",title:"已售完"},mt=I('<p class="pb-1 pt-2"> 對商品有任何疑問嗎?<a href="/nuxtShop/faq" title="尋找客服人員">尋找客服人員!</a></p><p>分享:</p><div class="social-share" data-initialized="true"><a href="#" class="social-share-icon icon-facebook" data-sharer="facebook" data-url="" title="分享至facebook(另開新視窗)"></a><a href="#" class="social-share-icon icon-twitter" data-sharer="twitter" data-url="" title="分享至twitter(另開新視窗)"></a></div>',3),_t={class:"col-12 col-md-9 my-5"},ht=t("h3",{class:"fs-4"},"內容:",-1),ft=t("h3",{class:"fs-4 mt-2"},"成份:",-1),bt=t("h3",{class:"fs-4 mt-2"},"保存方式最佳賞味期限:",-1),vt=t("p",null,[c(" 可冷藏保存1週，冷凍保存2週。請見商品標示日期。"),t("br"),c(" 建議放入冷藏前請將蛋糕用保鮮盒密封好，再存放食用前於室溫回溫20-30分鐘風味更佳！開封後請儘速食用完畢。"),t("br"),c(" 餅乾：常溫密封約可保存2週，冷凍密封約可保存2-3個月，回溫即可食用。"),t("br"),c(" 蛋糕：放置冷藏約可保存5天。"),t("br"),c(" 慕斯：密封冷藏約可保存2-3天，密封冷凍約可保存7-10天，回溫即可食用。 ")],-1),St={__name:"[id]",async setup(yt){let m,g;const s=y(),k=U(),w=k.public.api,x=k.public.path,j=Q().params.id;[m,g]=z(()=>A(`${w}api/${x}/product/${j}`,"$clhCL8ugmS").then(n=>{s.value=n.data.value.product})),m=await m,g();const i=y(1),_=n=>{switch(n.target.outerText){case"+":if(i.value>=50)return;i.value++;break;case"-":if(i.value<=1)return;i.value--;break;default:return}},h=y(!0),C=(n,e)=>{if(e.key=="Enter"||e.type=="click"){h.value=!1;const b={product_id:s.value.id,qty:i.value};$fetch(`${w}api/${x}/cart`,{method:"post",body:{data:b}}).then(d=>{h.value=!0,$({message:d.message,type:"success"}),i.value=1}).catch(d=>{h.value=!0,$({message:d.message,type:"error"}),i.value=1})}};return(n,e)=>{const b=V,d=F,v=q,E=T,N=L,S=B;return p(),u(R,null,[D(l(b,{class:K(["position-fixed w-100 h-100 bg-dark opacity-25",{"d-none":a(h)}]),style:{"z-index":"10000"}},null,8,["class"]),[[S,!0]]),l(d),t("div",H,[t("div",J,[t("div",G,[P,l(E,{separator:"/"},{default:f(()=>[l(v,null,{default:f(()=>[W]),_:1}),l(v,null,{default:f(()=>[X]),_:1}),l(v,null,{default:f(()=>[c("內容")]),_:1})]),_:1})]),t("div",Y,[t("a",{href:"javascript:;",class:"text-decoration-none text-nowrap",onClick:e[0]||(e[0]=o=>n.$router.back()),title:"返回"},"返回")])]),t("div",Z,[t("div",tt,[t("img",{src:a(s).imageUrl,class:"w-100 h-100",alt:`${a(s).title}圖示`},null,8,et)]),t("div",st,[t("h2",at,[a(s).num<=5&&a(s).num>=1?(p(),u("span",ot,"HOT ")):a(s).num===0?(p(),u("span",nt,"SOLD OUT ")):M("",!0),c(" "+r(a(s).title),1)]),t("p",it,"尺寸:"+r(a(s).unit),1),t("p",null,[t("del",null,"原價"+r(a(s).origin_price)+"$",1),t("span",lt,"優惠價"+r(a(s).price)+"$",1)]),t("div",ct,[t("div",rt,[t("a",{href:"javascript:;",onClick:e[1]||(e[1]=o=>_(o)),onKeypress:e[2]||(e[2]=o=>_(o)),class:"num-btn p-2 text-white",title:"減少"}," - ",32),t("label",dt,[t("input",{id:"num",name:"num",type:"text",min:"1",style:{"max-width":"120px"},class:"num-centerbtn py-2 bg-dark text-white",onChange:e[3]||(e[3]=o=>n.updateQty(n.item.id,n.key)),value:a(i)},null,40,ut)]),t("a",{href:"javascript:;",onClick:e[4]||(e[4]=o=>_(o)),onKeypress:e[5]||(e[5]=o=>_(o)),class:"num-btn p-2 text-white",title:"增加"}," + ",32)]),a(s).num>=1?(p(),u("a",{key:0,onClick:e[6]||(e[6]=O(o=>C(n.item,o),["stop"])),onKeydown:e[7]||(e[7]=o=>C(n.item,o)),href:"javascript:;",class:"btn btn-primary",title:"加入購物車"},"加入購物車",32)):(p(),u("a",pt,"已售完"))]),mt]),t("div",_t,[ht,t("p",null,r(a(s).content),1),ft,t("p",null,r(a(s).description),1),bt,vt])])]),l(N)],64)}}};export{St as default};