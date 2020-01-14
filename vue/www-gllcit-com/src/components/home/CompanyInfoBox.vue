
<style scoped>
.content {
  text-align: left;
  padding: 20px;
}

.company-img {
  width: 160px;
}
</style>

<template>
  <div class="hello">
    <box-title-bar :title="title" @openDetail="onOpenDetail" />

    <table>
      <tr>
        <td>
          <img
            class="company-img"
            src="https://release.bitwormhole.com/static/gllcit.com/company2.jpg"
          />
        </td>
        <td class="content">
          桂林联潮信息技术有限公司成立于2014年底，是一家专注于信息系统集成服务，网络信息服务，
          计算机软硬件及电子通信技术开发、 技术转让、技术咨询与技术服务的高科技企业，其主营业务包括计算机系统集成、
          工业通信电子产品研发、桌面软件设计与开发、 移动设备软件设计与开发、企业信息化管理软件设计与开发、
          政企门户网站和电子商务平台建设。
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CompanyInfoBox",

  data() {
    return {
      title: "公司信息"
    };
  },

  methods: {
    onOpenDetail() {
      this.$router.push("/company");
    }
  }
};
</script>
