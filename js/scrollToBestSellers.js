let hasScrolledToBestSellers = false;

document.addEventListener("scroll", function onScroll() {
  if (!hasScrolledToBestSellers) {
    const bestSellersSection = document.querySelector(".best-seller-card");
    if (bestSellersSection) {
      bestSellersSection.scrollIntoView({ behavior: "smooth" });
      hasScrolledToBestSellers = true;
    }
  }
});
