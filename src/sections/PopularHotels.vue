<template>
  <div class="p-hotels">
    <div class="p-hotels__header">
      <div class="p-hotels__header__text">
        <h1>Our most popular Hotels</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <button>View All</button>
    </div>
    <ul v-if="!link">
      <router-link class="cards__router" @click="scrollToTop(1)" to="/catalog">
        <li class="p-hotels__cards">
          <img
            loading="lazy"
            class="lazy_img"
            data-src="/images/hotel_1.png"
            src="../srcImg/lazyImg/hotel_1_lazy.png"
            alt=""
          />
          <cards-desc>Danubius Hotel Regents Park</cards-desc>
        </li>
      </router-link>
      <router-link class="cards__router" @click="scrollToTop(2)" to="/catalog">
        <li class="p-hotels__cards">
          <img
            loading="lazy"
            class="lazy_img"
            data-src="/images/hotel_2.png"
            src="../srcImg/lazyImg/hotel_2_lazy.png"
            alt=""
          />
          <cards-desc>The Resident Soho</cards-desc>
        </li>
      </router-link>
      <router-link class="cards__router" @click="scrollToTop(3)" to="/catalog">
        <li class="p-hotels__cards">
          <img
            loading="lazy"
            class="lazy_img"
            data-src="/images/hotel_3.png"
            src="../srcImg/lazyImg/hotel_3_lazy.png"
            alt=""
          />
          <cards-desc>London Bridge Hotel</cards-desc>
        </li>
      </router-link>
    </ul>
    <ul v-else>
      <li class="p-hotels__cards p-hotels__cards-inactive">
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/hotel_1.png"
          src="../srcImg/lazyImg/hotel_1_lazy.png"
          alt=""
        />
        <cards-desc>London Bridge Hotel</cards-desc>
      </li>
      <li class="p-hotels__cards p-hotels__cards-inactive">
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/hotel_2.png"
          src="../srcImg/lazyImg/hotel_2_lazy.png"
          alt=""
        />
        <cards-desc>London Bridge Hotel</cards-desc>
      </li>
      <li class="p-hotels__cards p-hotels__cards-inactive">
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/hotel_3.png"
          src="../srcImg/lazyImg/hotel_3_lazy.png"
          alt=""
        />
        <cards-desc>London Bridge Hotel</cards-desc>
      </li>
    </ul>
  </div>
</template>

<script>
import CardsDesc from "@/components/CardsDesc.vue";
export default {
  props: ["link"],
  components: {
    CardsDesc,
  },
  methods: {
    scrollToTop(e) {
      this.$store.state.cartImg = e;
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.$store.commit("scrollImg", document.querySelectorAll("img[data-src]"));
  },
};
</script>
<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .p-hotels__header {
    align-items: center !important;
    flex-direction: column !important;
    text-align: center;
    p {
      width: unset !important;
    }
  }
}
@media only screen and (max-width: 1000px) {
  ul {
    flex-direction: column;
    align-items: center;
    .cards__router {
      width: 80%;
      @media only screen and (max-width: 500px) {
        width: 100%;
      }
    }
    .p-hotels__cards-inactive {
      width: 80%;
      @media only screen and (max-width: 500px) {
        width: 100%;
      }
    }
    .p-hotels__cards {
      margin-bottom: 3.5rem;
    }
  }
}
.p-hotels__cards {
  margin: 0 10px;
  img {
    width: 100%;
  }
}
.lazy_img {
  width: 411px;
}
a {
  text-decoration: none;
}

.p-hotels__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
  button {
    height: 40px;
    width: 110px;
    border-radius: 280px;
    border: none;
    background: rgba(36, 171, 112, 0.1);
    font-weight: 400;
    color: #24ab70;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  .p-hotels__header__text {
    h1 {
      font-weight: 600;
      font-size: 40px;
      margin-bottom: 20px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #555555;
      width: 410px;
    }
  }
}
ul {
  display: flex;
  justify-content: space-between;
  li {
    cursor: pointer;
  }
}
</style>
