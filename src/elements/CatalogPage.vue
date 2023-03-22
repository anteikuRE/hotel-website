<template>
  <div>
    <nav-bar>
      <li><a href="#booking">Booking</a></li>
      <li>
        <router-link @click="scrollTo" to="/landing">Facilities</router-link>
      </li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#map">Location</a></li>
      <li><a href="#contact">Contact</a></li>
    </nav-bar>
    <cart-component class=""></cart-component>
    <popular-hotels class="thing" id="booking" :link="true"></popular-hotels>
    <content-base
      class="discover thing"
      :display="'flex-direction: row-reverse'"
    >
      <template v-slot:h1
        ><div class="discover_h1">Discover our History</div>
      </template>
      <template v-slot:p>
        <div class="discover_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </div>
        <div class="discover_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
      </template>
      <template v-slot:button>
        <base-button class="discover__btn">Explore More</base-button>
      </template>
      <template v-slot:image>
        <img
          loading="lazy"
          class="lazy_img responsive_img"
          data-src="/images/discover_house.png"
          src="../srcImg/lazyImg/discover_house_lazy.png"
          alt=""
        />
      </template>
    </content-base>
    <asked-questions class="thing"></asked-questions>
    <content-base
      id="about"
      class="about thing"
      :display="'flex-direction: row-reverse; height: 480px; background: rgba(36, 171, 112, 0.1);border-radius: 50px 50px 50px 50px;'"
      :height="'height: 480px'"
    >
      <template v-slot:h1><div class="about_h1">About Us</div> </template>
      <template v-slot:p>
        <div class="about_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </div>
        <div class="about_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
      </template>
      <template v-slot:button>
        <base-button class="about__btn">Read More</base-button>
      </template>
      <template v-slot:image>
        <img
          loading="lazy"
          class="about__img lazy_img responsive_img"
          data-src="/images/perfectPlace.png"
          src="../srcImg/lazyImg/perfectPlace_lazy.png"
          alt=""
        />
      </template>
    </content-base>
    <map-component class="thing" id="map"></map-component>
    <base-footer class="thing" id="contact"></base-footer>
  </div>
</template>

<script>
import CartComponent from "@/sections/CartComponent.vue";
import baseButton from "@/components/baseButton.vue";

import PopularHotels from "@/sections/PopularHotels.vue";
import AskedQuestions from "@/sections/AskedQuestions.vue";
import ContentBase from "@/components/ContentBase.vue";
import NavBar from "@/elements/NavBar.vue";
import MapComponent from "@/sections/MapComponent.vue";
import BaseFooter from "./BaseFooter.vue";
export default {
  name: "LandingPage",
  components: {
    baseButton,
    PopularHotels,
    ContentBase,
    MapComponent,
    BaseFooter,
    AskedQuestions,
    NavBar,
    CartComponent,
  },
  methods: {
    scrollTo() {
      window.scrollTo(0, 1400);
    },
  },
  mounted() {
    this.$store.commit("scroll", document.querySelectorAll(".thing"));
    this.$store.commit("scrollImg", document.querySelectorAll("img[data-src]"));
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 650px) {
  .responsive_img {
    width: 100%;
    margin-left: unset !important;
  }
}

nav {
  ul {
    li {
      a {
        color: #222222;
        text-decoration: none;
      }
      cursor: pointer;
      margin: 0 1rem;
    }
  }
}

.discover_h1,
.about_h1 {
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
}
.discover_p,
.about_p {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}

.discover_p:nth-child(1),
.about_p:nth-child(1) {
  margin-bottom: 1.5rem;
}

.discover__btn,
.about__btn {
  font-weight: 600;
  font-size: 16px;
  padding: 16px 32px;
}
.about__img {
  margin-left: -17px;
}
</style>
