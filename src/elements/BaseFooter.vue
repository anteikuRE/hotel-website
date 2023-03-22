<template>
  <div class="wrapper">
    <div class="text">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div class="img">
        <img loading="lazy" src="/images/facebook.svg" alt="" />
        <img loading="lazy" src="/images/inst.svg" alt="" />
        <img loading="lazy" src="/images/google.svg" alt="" />
      </div>
    </div>
    <div class="home column">
      <h1>Home</h1>
      <h2>Booking</h2>
      <h2>Facilities</h2>
      <h2>Location</h2>
      <h2>Contact</h2>
    </div>
    <div class="help column">
      <h1>Help</h1>
      <h2>About Us</h2>
      <h2>Help center</h2>
      <h2>Privacy policy</h2>
      <h2>FAQs</h2>
    </div>
    <div class="app column">
      <h1>Get the app</h1>
      <h2>iOS app</h2>
      <h2>Android app</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 500px) {
  html {
    main {
      .wrapper {
        display: flex;

        align-items: center;
        flex-direction: column-reverse;

        .column {
          align-items: center;
          margin-bottom: 1rem;
          h1 {
            margin-bottom: 1.5rem;
          }
        }
        .text {
          width: unset;
          align-items: center;
          text-align: center;
          .img {
            img {
              margin: 1rem;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 630px) {
  html {
    .wrapper {
      justify-content: space-between;
      height: unset;
      align-items: flex-start;
      .text {
        p {
          line-height: 32px;
        }
        .img {
          img {
            margin-right: 1rem;
          }
        }
      }
    }
  }
}
.wrapper {
  display: flex;
  justify-content: space-evenly;
  height: 200px;
  align-items: center;
  margin-bottom: 6rem;
  .text {
    display: flex;
    flex-direction: column;
    width: 20%;
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #555555;
      margin-bottom: 2rem;
    }
    .img {
      display: flex;
      img {
        margin-right: 2rem;
      }
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    height: 100%;
    h1 {
      margin-bottom: 2rem;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
    }
    h2 {
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 1.5rem;
    }
  }
}
</style>
