
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
          <td>
            <img
              class="logo-image"
              src="https://release.bitwormhole.com/static/gllcit.com/logo.png"
            />
          </td>
          <td>
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
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">公司简介</el-menu-item>
        <el-menu-item index="3">行业新闻</el-menu-item>
        <el-menu-item index="4">成功案例</el-menu-item>
        <el-menu-item index="5">关于</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
