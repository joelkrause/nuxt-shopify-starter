<template>
    <nav class="site__nav">
        <ul>
          <li>
            <nuxt-link to="/collection">Collections <span class="arrow">&darr;</span></nuxt-link>
            <ul class="sub-menu">
              <li>
                <nuxt-link to="/collection/test">Test</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
    </nav>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  },
};
</script>