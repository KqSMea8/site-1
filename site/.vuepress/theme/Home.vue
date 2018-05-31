<template>
  <div class="home">
    <div class="hero">
      <div class="content">
        <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>
        <p class="action" v-if="data.actionText && data.actionLink">
          <NavLink class="action-button" :item="actionLink"/>
        </p>
        <div class="action download-action">
          <el-popover
            placement="bottom"
            width="520"
            trigger="click">
            <template>
              <div class="download-item">
                <span>最新版本：</span>
                <a :href="data.tiny" target="_blank">{{ data.tiny }}</a>
              </div>
              <div class="download-item">
                <span>debug版本：</span>
                <a :href="data.tinyd" target="_blank">{{ data.tinyd }}</a>
              </div>
              <el-alert
                title="Tiny.js 官方不建议使用 npm 方式安装"
                :closable="false"
                type="info"
                show-icon>
              </el-alert>
            </template>
            <el-button type="text" slot="reference">下载 Tiny.js</el-button>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="feature in data.features">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <Content custom/>
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
    <div class="signature" v-if="data.signature">
      本站使用 <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a> 快速搭建
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
import mobile from "is-mobile";

export default {
  components: { NavLink },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  },
  methods: {}
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.home {
  .hero {
    height: 700px;
    background-color: rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-image: url('https://zos.alipayobjects.com/rmsportal/khzFUkgZswuhqTwmaRSb.jpg'); // zos.alipayobjects.com/rmsportal/khzFUkgZswuhqTwmaRSb.jpg);
    background-position: 50%;
    position: relative;

    &:before {
      position: absolute;
      content: ' ';
      height: 100%;
      width: 100%;
      background-color: rgba(150, 108, 67, 0.3);
    }

    .content {
      position: relative;
      z-index: 1;
      text-align: center;
      padding-top: 160px;
    }

    .description {
      font-size: 3rem;
      line-height: 1.3;
      padding: 0;
      margin: 0;
      margin-bottom: 80px;
      color: #fff;
      font-weight: 300;
      font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: $textColor;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 0.8rem 3.2rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid #fff;

      &:hover {
        background-color: #fff;
        text-decoration: none;
      }
    }

    .el-button--text {
      font-size: 16px;
      color: $textColor;
    }
  }

  .features {
    padding: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }

  .signature {
    text-align: center;
    color: lighten($textColor, 25%);
    opacity: 0.5;
    margin-bottom: 1rem;
    margin-top: -1.5rem;
  }
}

.download-item {
  margin-bottom: 10px;

  span {
    display: inline-block;
    width: 90px;
    text-align: right;
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    .hero {
      height: 350px;

      .content {
        padding-top: 60px;
      }

      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 2rem;
      }

      .download-action {
        display: none;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
