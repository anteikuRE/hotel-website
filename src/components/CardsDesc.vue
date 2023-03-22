<template>
  <div class="p-hotels__cards__description">
    <h2 :style="h2">London NW8 7JT England</h2>
    <h1 :style="h1"><slot></slot></h1>
    <div class="p-hotels__cards__cost__wrapper">
      <h3 :style="h3">$200 Par Night</h3>
      <img loading="lazy" src="../srcImg/Line.png" alt="" />
      <div class="rating">
        <div class="stars">
          <img
            loading="lazy"
            class="lazy_img"
            data-src="/images/star.svg"
            src="../srcImg/lazyImg/star_lazy.png"
            alt=""
          />
          <img
            loading="lazy"
            class="lazy_img"
            data-src="/images/star.svg"
            src="../srcImg/lazyImg/star_lazy.png"
            alt=""
          />
          <img
            loading="lazy"
            class="lazy_img"
            data-src="/images/star.svg"
            src="../srcImg/lazyImg/star_lazy.png"
            alt=""
          />
          <img
            loading="lazy"
            class="lazy_img"
            data-src="/images/star.svg"
            src="../srcImg/lazyImg/star_lazy.png"
            alt=""
          />
          <img
            loading="lazy"
            class="lazy_img"
            data-src="/images/star_grey.svg"
            src="../srcImg/lazyImg/star_grey_lazy.png"
            alt=""
          />
        </div>
        <h3>4.8</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["h1", "h2", "h3"],
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1320px) {
  .p-hotels__cards__cost__wrapper {
    width: unset !important;
  }
}
.lazy_img {
  width: unset !important;
}
h2 {
  font-weight: 400;
  font-size: 12px;
  color: #24ab70;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
h1 {
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 24px;
  color: #222222;
}
h3 {
  color: #222222;
}
.p-hotels__cards__cost__wrapper {
  display: flex;
  justify-content: space-between;
  width: 70%;

  .rating {
    display: flex;
    h3 {
      color: #222222;
      margin-left: 12px;
    }
    .stars {
      img {
        margin: 0 3px;
      }
    }
  }
}
</style>
