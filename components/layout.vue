<template>
  <div class="root">
    <Header />
      <div class="main-container" :class="{'with-padding': withPadding}" >
        <slot />
      </div>
    <footer />
  </div>
</template>

<script>
import Header from './header';
import Footer from './footer';

export default {
  components: {
    Header,
    Footer
  },
  props: {
    withPadding: {
      type: Boolean,
      default: true
    },
  },
};
</script>
