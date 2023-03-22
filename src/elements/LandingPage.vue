<template>
  <div>
    <nav-bar>
      <li><a href="#booking">Booking</a></li>
      <li><a href="#facilities">Facilities</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#map">Location</a></li>
      <li><a href="#contact">Contact</a></li>
      <!-- <li><base-button class="button">Login</base-button></li> -->
    </nav-bar>
    <content-base class="">
      <template v-slot:h1>Find your perfect place to stay</template>
      <template v-slot:p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </template>
      <template v-slot:watch>
        <div class="watch-video">
          <img
            class="lazy_img watch__video_img"
            data-src="/images/arrow_right.svg"
            src="../srcImg/lazyImg/arrow_right_lazy.png"
            alt=""
          />
          <h2 @click="ad">Watch video</h2>
        </div>
      </template>

      <template v-slot:image>
        <img
          class="lazy_img responsive_img"
          data-src="/images/header_house.png"
          src="../srcImg/lazyImg/header_house_lazy.png"
          alt=""
        />
      </template>
      <template v-slot:search>
        <div class="search-bar__wrapper">
          <ul class="search-bar">
            <li>
              <div class="search-bar__component">
                <img
                  class="lazy_img"
                  src="../srcImg/lazyImg/pin_lazy.png"
                  data-src="/images/pin.svg"
                  alt=""
                />
                <div class="search-bar__text">
                  <h1>Location</h1>
                  <h2>United States</h2>
                </div>
              </div>
            </li>
            <li>
              <div class="search-bar__component">
                <img
                  class="lazy_img"
                  src="../srcImg/lazyImg/calendar_lazy.png"
                  data-src="/images/calendar.svg"
                  alt=""
                />
                <div class="search-bar__text">
                  <h1>Chack in</h1>
                  <h2>10 Jun 2021</h2>
                </div>
              </div>
            </li>
            <li>
              <div class="search-bar__component">
                <img
                  class="lazy_img"
                  data-src="/images/calendar.svg"
                  src="../srcImg/lazyImg/calendar_lazy.png"
                  alt=""
                />
                <div class="search-bar__text">
                  <h1>Chack out</h1>
                  <h2>15 Jun 2021</h2>
                </div>
              </div>
            </li>
            <li>
              <div class="search-bar__component">
                <img
                  class="lazy_img"
                  data-src="/images/person.svg"
                  src="../srcImg/lazyImg/person_lazy.png"
                  alt=""
                />
                <div class="search-bar__text">
                  <h1>Rooms for</h1>
                  <h2>1 room, 2 guests</h2>
                </div>
              </div>
            </li>

            <li class="search__btn">
              <base-button>
                <div class="btn__content">
                  <img src="../srcImg/search.svg" alt="" />Search...
                </div>
              </base-button>
            </li>
          </ul>
        </div>
      </template>
    </content-base>
    <popular-hotels class="thing" id="booking"></popular-hotels>

    <facilities-provide class="thing" id="facilities"></facilities-provide>

    <content-base
      id="about"
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
          src="../srcImg/lazyImg/discover_house_lazy.png"
          data-src="/images/discover_house.png"
          alt=""
        />
      </template>
    </content-base>

    <testimonial-slider class="thing"></testimonial-slider>

    <map-component class="thing" id="map"></map-component>
    <base-footer class="thing" id="contact"></base-footer>
  </div>
</template>

<script>
import NavBar from "@/elements/NavBar.vue";
import baseButton from "@/components/baseButton.vue";
import PopularHotels from "@/sections/PopularHotels.vue";
import FacilitiesProvide from "@/sections/FacilitiesProvide.vue";
import ContentBase from "@/components/ContentBase.vue";
import TestimonialSlider from "@/sections/TestimonialSlider.vue";
import MapComponent from "@/sections/MapComponent.vue";
import BaseFooter from "./BaseFooter.vue";
export default {
  name: "LandingPage",
  components: {
    baseButton,
    PopularHotels,
    FacilitiesProvide,
    ContentBase,
    TestimonialSlider,
    MapComponent,
    BaseFooter,
    NavBar,
  },
  methods: {
    ad() {
      const a = document.querySelector(".ad");
      console.log(a);
      a.src = a.dataset.src;
    },
  },
  mounted() {
    this.$store.commit("scroll", document.querySelectorAll(".thing"));
    this.$store.commit("scrollImg", document.querySelectorAll("img[data-src]"));
  },
};
</script>

<style lang="scss" scoped>
.watch__video_img {
  width: unset !important;
}
@media only screen and (max-width: 600px) {
  nav {
    ul {
      li {
        margin: 0.5rem !important;
      }
    }
  }
}
@media only screen and (max-width: 650px) {
  .responsive_img {
    width: 100%;
  }
}

nav {
  ul {
    li {
      .button {
        width: 80px;
        height: 40px;
      }
      a {
        color: #222222;
        text-decoration: none;
      }
      cursor: pointer;
      margin: 0 1rem;
    }
  }
}

.discover {
  @media only screen and (max-width: 860px) {
  }
}
.discover_h1 {
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
}
.discover_p {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}

.discover_p:nth-child(1) {
  margin-bottom: 1.5rem;
}

.discover__btn {
  font-weight: 600;
  font-size: 16px;
  padding: 16px 32px;
}
.watch-video {
  display: flex;
  align-items: center;
  margin-left: 1.1rem;
  @media only screen and (max-width: 1225px) {
    justify-content: center;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-left: 2.1rem;
  }
}
.search-bar__wrapper {
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 22px 38px rgba(0, 34, 19, 0.08);
  border-radius: 280px;
  position: absolute;
  z-index: 1;
  margin-top: -9rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 68%;
  @media only screen and (max-width: 1466px) {
    width: 80%;
  }
  @media only screen and (max-width: 1245px) {
    width: 85%;
  }
  @media only screen and (max-width: 1225px) {
    display: none;
  }

  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .search-bar__component {
      display: flex;
      align-items: flex-start;
    }
    li {
      margin-left: 60px;
      .search-bar__text {
        margin-left: 0.5rem;
        h1 {
          font-weight: 400;
          font-size: 20px;
          margin-bottom: 1rem;
        }
        h2 {
          font-weight: 400;
          font-size: 14px;

          color: #555555;
        }
      }
    }
    .search__btn {
      height: 100%;
      button {
        height: 100%;
        width: 200px;
        border-radius: 280px;
      }
      .btn__content {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 18px;
        img {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
