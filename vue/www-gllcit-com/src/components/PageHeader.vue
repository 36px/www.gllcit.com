
<style scoped>
.logo-image {
  margin-left: 20px;
  width: 48px;
}

.logo-text {
  width: 100px;
}

.nav-bar {
  border-width: 0px;
}
</style>

<template>
  <div class="hello">
    <div>
      <table>
        <tr>
          <td @click="onClickLogo">
            <img
              class="logo-image"
              src="https://release.bitwormhole.com/static/gllcit.com/logo.png"
            />
          </td>
          <td @click="onClickLogo">
            <img
              class="logo-text"
              src="https://release.bitwormhole.com/static/gllcit.com/text-lckj.svg"
            />
          </td>
        </tr>
      </table>
    </div>

    <div>
      <el-menu
        class="nav-bar"
        mode="horizontal"
        background-color="#27aad6"
        text-color="#ffffff"
        active-text-color="#ffff00"
        @select="onSelectItem"
      >
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="company">公司简介</el-menu-item>
        <el-menu-item index="business">业务介绍</el-menu-item>
        <el-menu-item index="projects">成功案例</el-menu-item>
        <el-menu-item index="about">联系我们</el-menu-item>
      </el-menu>
    </div>

    <!-- div>{{output}}</div -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  data() {
    return {
      output: "hello"
    };
  },

  methods: {
    onSelectItem(index, indexPath) {
      this.$router.push("/" + index);
    },

    onClickLogo() {
      this.$router.push("/");
    }
  }
};
</script>
