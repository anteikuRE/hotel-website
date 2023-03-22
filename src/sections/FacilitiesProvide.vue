<template>
  <div class="facilities__wrapper">
    <div class="facilities__wrapper__text">
      <h1>We do our best facilities provide you</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </p>
      <base-button>Contact Now</base-button>
    </div>
    <ul>
      <li>
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/workspace.svg"
          src="../srcImg/lazyImg/workspace_lazy.png"
          alt=""
        />
        <h1>Private Workspace</h1>
      </li>
      <li>
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/parking.svg"
          src="../srcImg/lazyImg/parking_lazy.png"
          alt=""
        />
        <h1>Parking Area</h1>
      </li>
      <li>
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/coffee.svg"
          src="../srcImg/lazyImg/coffee_lazy.png"
          alt=""
        />
        <h1>Breakfast</h1>
      </li>
      <li>
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/wifi.svg"
          src="../srcImg/lazyImg/wifi_lazy.png"
          alt=""
        />
        <h1>Free Wifi</h1>
      </li>
      <li>
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/electricity.svg"
          src="../srcImg/lazyImg/electricity_lazy.png"
          alt=""
        />
        <h1>Free Electricity</h1>
      </li>
      <li>
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/swimming.svg"
          src="../srcImg/lazyImg/swimming_lazy.png"
          alt=""
        />
        <h1>Swimming Pool</h1>
      </li>
      <li>
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/gym.svg"
          src="../srcImg/lazyImg/gym_lazy.png"
          alt=""
        />
        <h1>Exercise Space</h1>
      </li>
      <li>
        <img
          loading="lazy"
          class="lazy_img"
          data-src="/images/other.svg"
          src="../srcImg/lazyImg/other_lazy.png"
          alt=""
        />
        <h1>Other Service</h1>
      </li>
    </ul>
  </div>
</template>

<script>
import baseButton from "@/components/baseButton.vue";
export default {
  name: "FacilitiesProvide",
  components: {
    baseButton,
  },
};
</script>

<style lang="scss" scoped>
.lazy_img {
  width: unset !important;
}
.facilities__wrapper {
  display: flex;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    margin-top: 4rem !important;
  }
  .facilities__wrapper__text {
    @media only screen and (max-width: 1100px) {
      margin-bottom: 2rem;
    }
    @media only screen and (max-width: 860px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    margin-top: 1.5rem;
    h1 {
      font-weight: 600;
      font-size: 40px;
      margin-bottom: 20px;
      line-height: 50px;
    }
    p {
      color: #555555;
      line-height: 28px;
      margin-bottom: 50px;
    }
    button {
      padding: 16px 32px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: auto auto auto auto;
    @media only screen and (max-width: 1180px) {
      align-content: center;
    }
    @media only screen and (max-width: 860px) {
      grid-template-columns: auto auto;
      justify-content: center;
    }
    li {
      width: 190px;
      height: 190px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      box-sizing: border-box;
      margin: 1.5rem;
      cursor: pointer;
      @media only screen and (max-width: 1350px) {
        margin: 1rem;
        width: 160px;
        height: 160px;
      }
      @media only screen and (max-width: 1180px) {
        margin: 0.5rem;
        align-content: center;
      }
      @media only screen and (max-width: 860px) {
        margin: 1.5rem;
        width: 192px;
        height: 192px;
      }
      @media only screen and (max-width: 460px) {
        margin: 0.5rem;
        width: 150px;
        height: 150px;
      }
      img {
        margin-bottom: 24px;
      }
    }
    li:hover {
      box-shadow: 0px 23px 30px rgba(0, 29, 16, 0.05);
    }
  }
}
</style>
