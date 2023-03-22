<template>
  <div class="wrapper">
    <div class="text">
      <h1>Frequently Asked <strong>Questions</strong></h1>
      <p>
        You can book massages 7 days a week from 6 am to 11 pm, including public
        holidays.
      </p>
    </div>
    <div class="questions">
      <ul>
        <li @click="li_1 = !li_1" :class="{ li__active: li_1 }">
          <img
            loading="lazy"
            src="../srcImg/arr_down_up.svg"
            alt=""
            style="display: none"
          />
          <img loading="lazy" src="../srcImg/arr_down.svg" alt="" />
          <div class="q__text">
            <h1>How far is nearset bus station ?</h1>
            <p style="display: none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
        </li>
        <li @click="li_2 = !li_2" :class="{ li__active: li_2 }">
          <img
            loading="lazy"
            src="../srcImg/arr_down_up.svg"
            alt=""
            style="display: none"
          />
          <img loading="lazy" src="../srcImg/arr_down.svg" alt="" />
          <div class="q__text">
            <h1>Why this project is better than others ?</h1>
            <p style="display: none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
        </li>
        <li @click="li_3 = !li_3" :class="{ li__active: li_3 }">
          <img
            loading="lazy"
            src="../srcImg/arr_down_up.svg"
            alt=""
            style="display: none"
          />
          <img loading="lazy" src="../srcImg/arr_down.svg" alt="" />
          <div class="q__text">
            <h1>Estimated time of completion ?</h1>
            <p style="display: none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      li_1: false,
      li_2: false,
      li_3: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes wid {
}
@media only screen and (max-width: 1050px) {
  main {
    .wrapper {
      @media only screen and (max-width: 870px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        .text {
          text-align: center;
        }
        .questions {
          margin-top: 3rem;
          @media only screen and (max-width: 580px) {
            width: 100%;
          }
          ul {
            .li__active {
              height: 190px !important;
              @media only screen and (max-width: 440px) {
                height: 290px !important;
              }
            }
          }
        }
      }
      .questions {
        ul {
          .li__active {
            height: 280px;
          }
        }
      }
    }
  }
}
.wrapper {
  display: flex;
  .text {
    margin: 0 3rem;
    h1 {
      font-weight: 600;
      font-size: 48px;
      line-height: 130%;
      margin-bottom: 15px;
      strong {
        color: #24ab70;
      }
    }
    p {
      line-height: 150%;
      color: rgba(16, 28, 38, 0.8);
    }
  }
  .questions {
    width: 80%;
    ul {
      .li__active {
        transition: 0.6s all;
        height: 190px;
        img:nth-child(2) {
          display: none;
        }
        img:nth-child(1) {
          animation-name: opc1;
          animation-duration: 1.2s;
          margin-top: 18.5px;
          display: block !important;
          align-self: flex-start;
        }
        .q__text {
          align-self: center;
          animation-name: opc1;
          animation-duration: 1.2s;
          p {
            margin-top: 16px;
            display: block !important;
          }
        }
      }
      li {
        transition: 0.6s all;
        cursor: pointer;
        height: 80px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 5px;
        padding: 0 30px;
        margin-bottom: 25px;
        img {
          animation-name: opc1;
          animation-duration: 1.2s;
        }
      }
    }
    .q__text {
      h1 {
        font-weight: 600;
        font-size: 18px;
        line-height: 170%;
        text-transform: capitalize;
      }
      p {
        line-height: 150%;
        color: rgba(29, 38, 58, 0.9);
      }
    }
  }
  @keyframes opc1 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
