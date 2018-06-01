<template>
  <div class="playground-content">
    <iframe :src="codePath"></iframe>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      codePath: ""
    };
  },
  mounted: function() {
    this.refreshPath(this.$route);
  },
  watch: {
    $route(to, from) {
      this.refreshPath(to);
    }
  },
  methods: {
    refreshPath(to) {
      const frontmatter = this.$page.frontmatter;
      const url = frontmatter.url;
      this.codePath = `/static/${url}`;
    }
  }
};
</script>

<style lang="less">
@import "../common/styles/index.less";
</style>
