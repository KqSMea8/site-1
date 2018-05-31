<template>
  <div class="blogs-wrapper">
    <router-link
      v-for="(blog, key, index) in blogs"
      :to="`${blog.type === 'dir' ? blog.nodes[0].path.replace(/\//g, '-') : key}.html`">
      <div class="card-head">{{ blog.name }}</div>
      <div class="card-body">
        <div class="flexbox">
          <div class="flexbox-item">
            <span
              @click.self.prevent="toGithub(blog['auther-link'])"
              :title="blog['auther-link']"
              v-if="blog.auther">@{{ blog.auther }}</span>
            <span class="color-gray" v-else>红领巾</span>
          </div>
          <div class="card-time">{{ blog.time.split('T')[0] }}</div>
        </div>
        <div class="card-content">{{ blog.desc }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "lodash";
import mobile from "is-mobile";

export default {
  computed: {
    blogs() {
      return this.$page.frontmatter.blogs;
    }
  },
  methods: {
    toGithub: function(link) {
      window.open(link, "_blank");
    }
  }
};
</script>

<style lang="less">
@import "../common/styles/index.less";
</style>
