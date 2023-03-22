<template>
  <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.48684812023!2d-90.38388849559708!3d38.65301650998822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2sSt.%20Louis%2C%20MO%2C%20USA!5e0!3m2!1sen!2sro!4v1677521320491!5m2!1sen!2sro"
      width="100%"
      height="670px"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="window_wrapper">
      <div class="window">
        <div class="text">
          <h1>Location of our Hotelos</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <form @submit.prevent>
          <input type="text" placeholder="Enter your email" />
          <baseButton>Contact</baseButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import baseButton from "@/components/baseButton.vue";
export default {
  components: { baseButton },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 1180px) {
  .map {
    .window_wrapper {
      .window {
        form {
          margin-right: 2rem;
          input {
            width: unset;
          }
        }
        .text {
          margin-left: 2rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 905px) {
  .map {
    margin-top: 5rem;

    .window_wrapper {
      margin-top: 3rem;

      @media only screen and (max-width: 332px) {
        margin-bottom: 32rem;
      }
      .window {
        flex-direction: column;
        margin: 0 6rem;
        box-shadow: 0px 9px 27px -14px rgba(0, 0, 0, 0.75);
        padding: 2rem;
        @media only screen and (max-width: 700px) {
          margin: 0 2rem;
        }
        @media only screen and (max-width: 415px) {
          height: unset;
        }
        form {
          @media only screen and (max-width: 415px) {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
          }
          margin: unset;
        }
        .text {
          text-align: center;
          width: unset;
          margin: unset;
        }
      }
    }
  }
}
.window_wrapper {
  width: 100%;
  margin-top: -14rem;
  margin-bottom: 26rem;
  display: flex;
  justify-content: center;
  .window {
    background: #ffffff;
    border-radius: 16px;
    z-index: 1;
    position: absolute;
    margin: 0 8rem;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      width: 45%;
      margin-left: 4rem;
      h1 {
        font-weight: 600;
        font-size: 36px;
        line-height: 40px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #555555;
      }
    }
    form {
      margin-right: 4rem;
      input {
        outline: none;
        border: none;
        width: 250px;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        color: #555555;
        font-family: "Open Sans";
      }
      button {
        padding: 16px 32px;
      }
    }
  }
}
.map {
  margin-top: 12.5rem;
}
</style>
