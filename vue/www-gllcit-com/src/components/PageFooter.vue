<style scoped>
.footer-1 {
  color: #c6c8cd;
  background: #5b696c;
}

.footer-2 {
  padding: 10px;
  color: #eef2f7;
  background: #879294;
}

.logo-image {
  width: 50px;
}

.logo-text {
  width: 70px;
}

.box1 {
  margin-top: 30px;
  text-align: center;
  padding: 40px;
}

.box2 {
  text-align: center;
  padding: 50px;
}

.box3 {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  padding: 20px;
}

.btn-about {
  margin: 20px;
  padding: 5px;
}
</style>

<template>
  <div class="hello">
    <div class="footer-1">
      <el-row>
        <el-col class="box1" :span="7" :xs="24" :sm="24" :md="8">
          <div class="box1-logo">
            <img
              class="logo-image"
              src="https://release.bitwormhole.com/static/gllcit.com/logo.png"
            />
          </div>
          <div class="box1-logo">
            <img
              class="logo-text"
              src="https://release.bitwormhole.com/static/gllcit.com/text-lckj.svg"
            />
          </div>
        </el-col>
        <el-col class="box2" :span="10" :xs="24" :sm="24" :md="8">
          <div>0773-2881958</div>
          <div>桂林市七星区信息产业园</div>
          <div>
            <button class="btn-about" @click="onClickAbout">
              <i class="el-icon-phone" /> 联系我们
            </button>
          </div>
        </el-col>
        <el-col class="box3" :span="7" :xs="24" :sm="24" :md="8">
          <div class="grid-content bg-purple">
            <img src="https://release.bitwormhole.com/static/gllcit.com/gllcit-qrcode.png" />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="footer-2">
      <span>Copyright(C) 2020 gllcit.com All Rights Reserved .</span>
      <span>桂林联潮信息科技有限公司 版权所有</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  props: {
    msg: String
  },

  methods: {
    onClickAbout() {
      this.$router.push("/about");
    }
  }
};
</script>
