<style scoped>
.banner {
  width: 100%;
}

.banner-image {
  width: 100%;
}

.info-box {
  padding: 10px;
}
</style>

<template>
  <div class="home">
    <div class="banner">
      <img class="banner-image" src="https://release.bitwormhole.com/static/gllcit.com/banner1.jpg" />
    </div>

    <el-row>
      <el-col class="info-box" :span="12" :xs="24" :sm="12" :md="12">
        <CompanyInfoBox />
      </el-col>
      <el-col class="info-box" :span="12" :xs="24" :sm="12" :md="12">
        <ItNewsBox />
      </el-col>
    </el-row>

    <div class="banner">
      <img class="banner-image" src="https://release.bitwormhole.com/static/gllcit.com/banner2.jpg" />
    </div>

    <div class="info-box">
      <CaseInfoBox />
    </div>
  </div>
</template>

<script>
import CaseInfoBox from "./../components/home/CaseInfoBox";
import CompanyInfoBox from "./../components/home/CompanyInfoBox";
import ItNewsBox from "./../components/home/ItNewsBox";

export default {
  name: "home",

  components: { CaseInfoBox, CompanyInfoBox, ItNewsBox },

  data() {
    return {};
  }
};
</script>
