<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link) && !isCustomize(link)"
    :exact="exact"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    :class="isCustomize(link) ? (customzieLinkActive ? 'nav-link router-link-active' : 'nav-link') : 'nav-link external'"
    :target="isMailto(link) || isTel(link) ? null : (isCustomize(link) ? null : '_blank')"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <OutboundLink v-if="!isCustomize(link)"/>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, isCustomize, ensureExt } from "./util";

export default {
  props: {
    item: {
      required: true
    }
  },
  computed: {
    link() {
      return ensureExt(this.item.link);
    },
    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    },
    customzieLinkActive() {
      return isCustomize(this.$route.path)
    }
  },
  created: function() {
    console.log()
  },
  methods: {
    isExternal,
    isCustomize,
    isMailto,
    isTel
  }
};
</script>
