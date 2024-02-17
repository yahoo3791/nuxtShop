const data = [
  {
    id: 1,
    title: "蛋糕",
    src: "/images/products/cake.png",
    href: "/products/cake",
    alt: "高比例的奶油使得磅蛋糕帶有相當濃郁的奶香，也讓其口感比戚風蛋糕來得紮實濕潤許多，深受許多人喜愛。",
  },
  {
    id: 2,
    title: "巧克力",
    src: "/images/products/chocolate.png",
    href: "/products/chocolate",
    alt: "可可和巧克力中最令人嚮往的風味特性，是平衡的澀味和苦味，且具有令人愉快的可可香氣，包含水果、花香、辛香料、草本、堅果、焦糖與麥芽等微妙的香氣。",
  },
  {
    id: 3,
    title: "布朗尼",
    src: "/images/products/brownie.png",
    href: "/products/brownie",
    alt: "布朗尼又稱為軟糖蛋糕、簡稱軟糖糕，布朗尼是外型看起來有點像餅乾的巧克力蛋糕，由於巧克力顏色呈現棕色，而被稱為布朗尼是一種方形的巧克力烘焙甜點。根據不同的組成密度，布朗尼有很多種型態，可能是比較濕潤的口感，或是比較像蛋糕偏乾的口感。食材包含榛果、糖霜、奶油起司、巧克力豆等。另外一種變化是由黑糖、香草取代巧克力的金色布朗尼，或是稱作布朗迪。布朗尼19世紀末期在美國發展，並且在20世紀上半年在美國受歡迎。現在仍是最受美國人歡迎的甜點之一。",
  },
  {
    id: 4,
    title: "杯子蛋糕",
    src: "/images/products/cupcake.png",
    href: "/products/cupcake",
    alt: "杯子蛋糕小巧精緻，充滿了童趣，小小的一口一個超級可愛，輕盈中帶著柔軟，綿密中透著香甜。",
  },
];

export default defineEventHandler((event) => {
  return data
});
