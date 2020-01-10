<template>
  <div class="hello">
    <box-title-bar :title="title" />

    <table>
      <tr>
        <td>
          <img src="https://release.bitwormhole.com/static/gllcit.com/company.jpg" />
        </td>
        <td>公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
          公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公
          司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司
          简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介。</td>
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
  }
};
</script>
