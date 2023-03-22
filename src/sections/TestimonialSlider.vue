<template>
  <div class="wrapper">
    <div class="arr arr_l">
      <img loading="lazy" src="../srcImg/arr_testimonial.svg" alt="" />
    </div>
    <div class="content">
      <div class="text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <h1>John Doe</h1>
        <h2>Businessman</h2>
      </div>
      <img
        loading="lazy"
        class="lazy_img"
        src="../srcImg/lazyImg/john_lazy.png"
        data-src="/images/john.png"
        alt=""
      />
    </div>
    <div class="arr arr_r">
      <img loading="lazy" src="../srcImg/arr_testimonial.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("scrollImg", document.querySelectorAll("img[data-src]"));
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  margin-top: 7.5rem;

  .text {
    margin: 0 5rem;
    @media only screen and (max-width: 1100px) {
      margin: 0 2rem;
    }
    @media only screen and (max-width: 600px) {
      p {
        margin-top: 1rem;
        text-align: center;
      }
      h1,
      h2 {
        text-align: end;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;

      color: #555555;
      margin-bottom: 60px;
    }
    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 12px;
    }
    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #555555;
    }
  }

  .arr {
    cursor: pointer;
    height: 40px;
    width: 40px;
    z-index: 1;
    position: absolute;
    border: 0px;
    box-shadow: 4px 2px 7px rgb(0 35 20 / 3%);
    background: #ffffff;
    right: 4rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .arr_l {
    left: 4rem;
    transform: rotateY(180deg);
    box-shadow: -4px 2px 7px rgba(0, 35, 20, 0.03);
    img {
      opacity: 0.2;
    }
  }
  @media only screen and (max-width: 705px) {
    .arr {
      right: 0;
    }
    .arr_l {
      left: 0;
    }
  }
  .content {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1000px) {
      flex-direction: column-reverse;
    }
    img {
      @media only screen and (max-width: 540px) {
        width: 100%;
      }
    }
  }
}
</style>
