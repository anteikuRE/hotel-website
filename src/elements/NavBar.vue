<template>
  <div class="nav__wrapper">
    <nav>
      <div style="display: none" class="burger__wrapper">
        <ul class="burger" @click="burg" ref="burger">
          <li class="burger__line"></li>
          <li class="burger__line"></li>
          <li class="burger__line"></li>
        </ul>
      </div>
      <ul class="nav" ref="nav">
        <slot></slot>
      </ul>
      <base-button class="button">Login</base-button>
    </nav>
  </div>
</template>

<script>
import baseButton from "@/components/baseButton.vue";
export default {
  name: "NavBar",
  components: {
    baseButton,
  },
  methods: {
    burg() {
      this.$refs.burger.classList.toggle("active");
      this.$refs.nav.classList.toggle("nav_active");
      document.querySelector(".button").classList.toggle("btn_active");
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  transition: all 0.5s;
}
@media only screen and (max-width: 800px) {
  .nav__wrapper {
    nav {
      ul {
        justify-content: space-around;
        li {
          margin: unset;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .burger__wrapper {
    display: flex !important;
  }

  .nav {
    animation-name: w;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  @keyframes w {
    from {
      opacity: 0;
      height: 0;
    }
    to {
      opacity: 1;
      height: 180px;
    }
  }

  .nav__wrapper {
    nav {
      flex-direction: column;
      align-items: flex-end;
      ul {
        flex-direction: column;
        align-items: flex-end;
        display: none;

        li {
          margin: 1rem 0;
        }
      }
      .button {
        display: none;
      }
      .btn_active {
        display: block;
      }
      .nav_active {
        display: flex !important;
      }
    }
  }
}

.burger__wrapper {
  display: block;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  .burger {
    cursor: pointer;
    padding: 0;
    display: flex;
    flex-direction: column;
    .burger__line {
      width: 30px;
      height: 0;
      border-bottom: 3.9px solid #21243d;
      margin: 3px;
      border-radius: 2px;
    }
  }

  .active {
    padding: 5px;
    .burger__text {
      a {
        display: flex !important;
      }
    }
    .burger__line {
      width: 30px;
      height: 0;
      border-bottom: 3.9px solid #21243d;
      border-radius: 2px;
      margin: -2px;
      animation-duration: 1s;
    }

    .burger__line:nth-child(1) {
      animation-name: burger_anim;
      transform: rotateZ(45deg);
    }

    .burger__line:nth-child(3) {
      animation-name: burger_anim-sec;
      transform: rotateZ(-45deg);
    }

    .burger__line:nth-child(2) {
      display: none;
    }
  }
}

@keyframes burger_anim {
  0% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(45deg);
  }
}
@keyframes burger_anim-sec {
  0% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(-45deg);
  }
}

.nav__wrapper {
  margin-bottom: 2.5rem;
}
nav {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ul {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .button {
    width: 80px;
    height: 40px;
  }
}
</style>
