<template>
  <div class="plugins-wrapper">
    <div class="card-grid">
      <div
        v-for="(plugin, key, index) in plugins"
        class="card-cell">
        <div class="card-head">
          <div
            v-if="plugin.video"
            @mouseover="activeBackground"
            @mouseout="disActiveBackground"
            type="video">
            <video loop="true">
              <source :src="plugin.video" />
            </video>
          </div>
          <div
            v-else
            type="image"
            :style="{backgroundImage:`url(${plugin.image})`}"></div>
        </div>
        <div class="card-content">
          <div class="card-detail">
            <div class="card-name">{{ plugin.name ? plugin.name : getPluginNameByKey(key) }}</div>
            <div class="card-desc">{{ plugin.desc }}</div>
          </div>
          <div class="flexbox">
            <div class=flexbox-item>
              <router-link
                :to="`${key === 'README' ? '/plugins/' : `${key}.html#demo`}`">示例</router-link>
            </div>
            <div class=flexbox-item>
              <router-link
                :to="`${key === 'README' ? '/plugins/' : `${key}.html#docs`}`">文档</router-link>
            </div>
            <div class=flexbox-item>
              <a
                :href="plugin.git ? plugin.git : `https://github.com/ant-tinyjs/${key}`"
                target="_blank">源码</a>
            </div>
            <div class=flexbox-item>
              <el-popover
                placement="top"
                title="插件引用方式"
                :width="isMobile ? screenWidth - 35 : 560"
                trigger="hover">
                <template>
                  <el-alert
                    title="推荐使用 npm 作为依赖引用："
                    :closable="false"
                    type="success"
                    show-icon>
                  </el-alert>
                  <div style="color: #c7254e;margin-bottom: 10px;padding:15px 0;font-size:16px;">npm install {{ key }} --save</div>
                  <el-alert
                    title="也可以直接引用 cdn 地址："
                    :closable="false"
                    type="info"
                    show-icon>
                  </el-alert>
                  <div style="margin-bottom: 10px;">
                    <a :href="plugin.cdn" target="_blank">{{ plugin.cdn }}</a>
                  </div>
                </template>
                <el-button type="text" slot="reference">下载</el-button>
              </el-popover>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="plugins-iframe"
      :show="frameShow">
      <router-link
        :to="'/plugins/'"
        class="frame-mask"></router-link>
      <div class="frame-container">
        <router-link
        :to="'/plugins/'"
        class="frame-close-btn"></router-link>
        <iframe
          :src="framePath"
          scrolling="auto"
          width="100%"
          height="100%"
          frameborde="0"
          allowtransparency="yes"
          ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "lodash";
import mobile from "is-mobile";
import camelCase from "camelcase";

export default {
  data() {
    return {
      isMobile: false,
      screenWidth: 300,
      framePath: "",
      frameShow: "false"
    };
  },
  computed: {
    plugins() {
      return this.$page.frontmatter.plugins;
    }
  },
  created: function() {
    this.isMobile = mobile();
  },
  mounted: function() {
    setTimeout(() => {
      this.screenWidth = screen.availWidth
    });
    this.refreshPath(this.$route);
  },
  watch: {
    $route(to, from) {
      this.refreshPath(to);
    }
  },
  methods: {
    getPluginNameByKey(key) {
      return firstUpperCase(camelCase(key.replace("tinyjs-plugin-", "")));
    },
    activeBackground(e) {
      const video = e.target;
      if (video instanceof HTMLVideoElement) {
        video.play();
      }
    },
    disActiveBackground(e) {
      const video = e.target;
      if (video instanceof HTMLVideoElement) {
        video.pause();
      }
    },
    toGithub: function(link) {
      window.open(link, "_blank");
    },
    refreshPath(to) {
      const hash = to && to.hash.replace("#", "");
      const name = to && to.path.match(/.*\/(.*)\.html$/i);
      if (name) {
        let path = name[1];
        this.framePath = `/static/plugins/${path}/${hash}/`;
        this.frameShow = "true";
      } else {
        this.frameShow = "false";
        this.framePath = "";
      }
    }
  }
};
function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1);
}
</script>

<style lang="less">
@import "../common/styles/index.less";
</style>
