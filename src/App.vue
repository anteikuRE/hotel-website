<template>
  <main>
    <div>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "assets/styles.scss";
.lazy_img {
  filter: blur(20px);
  width: 100%;
}
img {
  transition: all 0.5s;
}
.thing {
  opacity: 0;
  transition: all 1.4s;
  margin-top: 9rem;
  @media only screen and (max-width: 600px) {
    margin-top: 7rem !important;
  }
}
html {
  scroll-behavior: smooth;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease-out all;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(80px);
}
main {
  margin: 2.5rem 5rem;
  font-family: $default-font;
  @media only screen and (max-width: 705px) {
    margin: 2.5rem 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    margin: 1rem 1.5rem;
  }
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
