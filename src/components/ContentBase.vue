<template>
  <div class="content__wrapper">
    <div class="content" :style="display">
      <div class="content__text">
        <h1>
          <slot name="h1"></slot>
        </h1>
        <p>
          <slot name="p"></slot>
        </p>
        <slot name="watch"></slot>
        <slot name="button"></slot>
      </div>
      <slot name="image"></slot>
    </div>
    <slot name="search"></slot>
  </div>
</template>

<script>
export default {
  props: ["display", "height"],
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #24ab700a;
  border-radius: 50px 50px 0px 0px;
  @media only screen and (max-width: 580px) {
    height: unset !important;
  }
  @media only screen and (max-width: 1400px) {
    align-items: flex-start;
  }
  @media only screen and (max-width: 1225px) {
    flex-direction: column-reverse !important;
    align-items: center;
    height: unset !important;
  }
  .content__text {
    margin-left: 3.75rem;
    @media only screen and (max-width: 1400px) {
      margin-top: 2rem;
      margin-right: 1rem;
    }
    @media only screen and (max-width: 1266px) {
      margin-top: unset;
      margin-right: 1rem;
    }
    @media only screen and (max-width: 1225px) {
      padding: 1rem;
      margin: unset;
      text-align: center;
    }
    h1 {
      font-weight: 600;
      font-size: 64px;
      line-height: 80px;
      margin-bottom: 1.8rem;
      @media only screen and (max-width: 500px) {
        font-size: 44px;
      }
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #555555;
      margin-bottom: 3.1rem;
    }
    .watch-video {
      display: flex;
      align-items: center;
      margin-left: 1.1rem;
      h2 {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        margin-left: 2.1rem;
      }
    }
  }
}
</style>
