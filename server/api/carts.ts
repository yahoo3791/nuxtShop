const data = [
  {
    category: "巧克力",
    content:
      "70%苦甜巧克力，味道濃郁香醇，嚴選 70%苦甜迦納可可，經過長時間發酵而散發細緻圓滑的風味，高含量的可可多酚，給你振奮精神及戀愛般的好心情。",
    description: "奶油、巧克力、砂糖、雞蛋、麵粉",
    id: "-NFitX_ZHWinBR0cdzQq",
    imageUrl:
      "https://storage.googleapis.com/vue-course-api.appspot.com/dessertsweet/1668877512757.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=K12pkhMxAWHNWnwZory169AH3iDwFVL%2F6kqwDIdYDs6R9h%2B13Vs3lhNcwiWMdzm7RvLy9zgpp1aA%2FwI%2FBiZyXDrNQaR4i%2BrrTB5DCDoFEUWQX1xKem7K6m1dbxGy%2Fvtm3B3OAFYG5HmwQ6pFqjiMVVsmnQRIuAjfuYSTqYalfmoj5Kkq4aXB8wCPN2hy45E%2B%2Fhh%2Fz5Z%2Bmh2C35pvOSxKRaGIkq7JlfgEDj%2FvpiOBNu6FIJD1wqFC2nsWXAyLn374mRTTKrXvvr%2FFDJk0Kh5D3D7t6mbMReQM6QbqIRODLqwaNmtZKpMyX1BCps2wJ0efvJf5bD%2FOEES1nhQeubDImQ%3D%3D",
    is_enabled: 1,
    num: 3,
    origin_price: 99,
    price: 69,
    title: "鉑金巧克力",
    unit: "寬10cm*高5cm/顆",
  },
];

export default defineEventHandler((event) => {
  return data;
});
