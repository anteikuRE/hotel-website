<template>
  <div class="wrapper">
    <div class="photos">
      <div>
        <img
          v-if="this.$store.state.cartImg === 1"
          class="main__img lazy_img"
          loading="lazy"
          src="../srcImg/lazyImg/hotel_1_lazy.png"
          data-src="/images/hotel_1.png"
          alt=""
        />
        <img
          v-else-if="this.$store.state.cartImg === 2"
          class="main__img lazy_img"
          loading="lazy"
          src="../srcImg/lazyImg/hotel_2_lazy.png"
          data-src="/images/hotel_2.png"
          alt=""
        />
        <img
          v-else-if="this.$store.state.cartImg === 3"
          class="main__img lazy_img"
          loading="lazy"
          src="../srcImg/lazyImg/hotel_3_lazy.png"
          data-src="/images/hotel_3.png"
          alt=""
        />
      </div>
      <div class="bottom">
        <div class="review">
          <img
            class="reviewer__ph lazy_img"
            loading="lazy"
            src="../srcImg/lazyImg/review_photo_lazy.png"
            data-src="/images/review_photo.png"
            alt=""
          />
          <div class="reviewer__text">
            <h1>Milan Jack</h1>
            <div class="rating">
              <h2>Home Seller, USA</h2>
              <h3>
                <img
                  loading="lazy"
                  class="lazy_img star_green_lazy"
                  src="../srcImg/lazyImg/star_green_lazy.png"
                  data-src="/images/star_green.svg"
                  alt=""
                />4.9 Rating
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum.
            </p>
          </div>
        </div>
        <div class="small__img__wrapper">
          <img
            loading="lazy"
            class="small__img lazy_img"
            src="../srcImg/lazyImg/danubius_hotel_lazy.png"
            data-src="/images/danubius_hotel.png"
            alt=""
          />
          <img
            loading="lazy"
            class="small__img lazy_img"
            src="../srcImg/lazyImg/danubius_hotel_lazy.png"
            data-src="/images/danubius_hotel.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="text">
      <cards-desc
        :h2="'font-size: 14px; line-height: 22px;'"
        :h1="'font-size: 28px; line-height: 35px;'"
        :h3="'font-weight: 700; font-size: 18px; line-height: 21px;'"
        class="c__desc"
        >Danubius Hotel Regents Park</cards-desc
      >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        laborum. Quos optio voluptatibus ratione nam dolorum sed deserunt,
        maxime necessitatibus impedit nesciunt a perspiciatis repellat
        consequatur ducimus ipsam consequuntur? Omnis. Nemo velit eligendi at
        quia amet voluptatibus a aperiam, eaque, possimus repellat corrupti
      </p>
      <div class="btn__wrapper">
        <base-button>To book Now</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import baseButton from "@/components/baseButton.vue";
import CardsDesc from "@/components/CardsDesc.vue";
export default {
  components: {
    CardsDesc,
    baseButton,
  },
  mounted() {
    this.$store.commit("scrollImg", document.querySelectorAll("img[data-src]"));
  },
};
</script>

<style lang="scss" scoped>
.star_green_lazy {
  width: unset !important;
}
@media only screen and (max-width: 1218px) {
  main {
    .wrapper {
      flex-direction: column;
      .photos {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: unset !important;
        .main__img {
          width: 100%;
          height: unset;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          flex-direction: column-reverse;
          align-items: center;
          .small__img__wrapper {
            @media only screen and (max-width: 530px) {
              display: flex;
              width: 100%;
              justify-content: space-around;
              .small__img {
                margin: 1rem 0;
                @media only screen and (max-width: 370px) {
                  height: 65px;
                  width: 135px;
                }
              }
            }
          }
          .small__img {
            margin: 1.5rem 1rem;
            height: 90px;
            width: 160px;
          }
          .review {
            .reviewer__ph {
              margin-top: -23px;
            }
            .reviewer__text {
              width: unset;
              margin-left: unset;
              margin-top: unset;
            }
          }
        }
      }
    }
  }
}
.wrapper {
  display: flex;

  .photos {
    margin-left: 100px;
    .main__img {
      height: 433.6739807128906px;
      width: 557px;
    }
    .bottom {
      display: flex;
      justify-content: space-between;

      .review {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .reviewer__ph {
          margin-top: -75px;
          margin-right: -12px;
          position: absolute;

          z-index: 1;
          width: unset !important;
        }

        .reviewer__text {
          padding: 20px;
          background: #ffffff;
          box-shadow: 8px 8px 49px rgba(25, 57, 70, 0.25);
          border-radius: 6px;
          width: 300px;
          margin-left: -100px;
          margin-top: -40px;

          h1 {
            font-weight: 400;
            font-size: 24px;
            line-height: 120%;
            margin-bottom: 8px;
          }
          p {
            font-weight: 400;
            font-size: 16px;
            line-height: 170%;
            color: #122237;
          }
          .rating {
            display: flex;
            justify-content: space-between;
            h2 {
              font-weight: 400;
              font-size: 14px;
              line-height: 120%;
              text-transform: capitalize;
              color: rgba(62, 86, 88, 0.7);
              margin-bottom: 15px;
            }
            h3 {
              font-weight: 400;
              font-size: 16px;
              line-height: 120%;
              text-transform: capitalize;
              color: #24ab70;
            }
          }
        }
      }
    }
  }
}
.text {
  margin: 1rem 5rem;
  @media only screen and (max-width: 1250px) {
    margin: 1rem 2rem;
  }
  @media only screen and (max-width: 400px) {
    margin: 1rem 0rem;
  }
  .btn__wrapper {
    display: flex;
    justify-content: flex-end;
    button {
      padding: 12px 34px;
    }
  }
  .c__desc {
    margin-bottom: 2.5rem;
  }
  p {
    line-height: 28px;
    margin-bottom: 4rem;
  }
}
.small__img {
  height: 70px;
  width: 140px;
  margin-top: 35px;
  margin-right: 0.5rem;
}
</style>
