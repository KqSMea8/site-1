<template>
  <div class="examples-wrapper">
    <div class="flexbox">
      <div class="examples-sidebar">
        <template v-for="(example, key, index) in examples">
          <a
            v-if="isMobile"
            class="card-cell"
            target="_blank"
            :href="`/static/examples/${key === 'README' ? example.uri : key}`">
            <div class="card-head">{{ example.name }}</div>
            <div class="card-desc">{{ example.desc }}</div>
            <div class="card-pic" :style="{backgroundImage:`url(${example.img})`}"></div>
          </a>
          <router-link
            v-else
            class="card-cell"
            :to="`${key === 'README' ? '/examples/' : `${key}.html`}`">
            <div class="card-head">{{ example.name }}</div>
            <div class="card-desc">{{ example.desc }}</div>
            <div class="card-pic" :style="{backgroundImage:`url(${example.img})`}"></div>
          </router-link>
        </template>
      </div>
      <div class="examples-container flexbox-item" v-if="!isMobile">
        <div class="examples-content" :direction="frameDirection">
          <iframe
            :src="`/static/examples/${framePath}`"
            :style="frameStyle"
            scrolling="no"
            allowtransparency="yes"
            ></iframe>
        </div>
        <div class="preview-cell">
          <el-card class="box-card">
            <div slot="header" style="text-align:center;">
              <a :href="git" target="_blank">查看源码</a>
            </div>
            <div style="margin-bottom:10px;text-align:center;">手机扫码预览</div>
            <qrcode-vue :value="framePath" size="128" level="H"></qrcode-vue>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "lodash";
import mobile from "is-mobile";
import QrcodeVue from "qrcode.vue";

export default {
  components: { QrcodeVue },
  data() {
    return {
      isMobile: false,
      git: "",
      framePath: "",
      frameDirection: "",
      frameStyle: {}
    };
  },
  computed: {
    examples() {
      return this.$page.frontmatter.examples;
    }
  },
  created: function(){
    this.isMobile = mobile();
    this.framePath = this.examples['README'].uri;
    this.routeChangeHandler(this.$route);
  },
  watch: {
    $route(to, from) {
      this.routeChangeHandler(to);
    }
  },
  methods: {
    routeChangeHandler(to) {
      const name = to && to.path.match(/.*\/(.*)\.html$/i);
      let conf;
      let path;
      if (name) {
        path = name[1];
        conf = this.examples[name[1]];
      } else {
        conf = this.examples["README"];
        path = conf.uri;
      }
      this.framePath = path;
      this.git = conf.git;
      this.frameDirection = conf.direction;
      if (conf.direction === "h") {
        this.frameStyle = {
          width: `${conf.height}px`,
          height: `${conf.width}px`
        };
      } else {
        this.frameStyle = {
          width: `${conf.width}px`,
          height: `${conf.height}px`
        };
      }
    }
  }
};
</script>

<style lang="less">
@import "../common/styles/index.less";
</style>
