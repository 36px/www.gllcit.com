
<style scoped>
.item-icon {
  font-size: 100px;
}

.item {
  display: inline-block;
  margin: 20px;
  color: lightskyblue;
}
</style>

<template>
  <div class="hello">
    <box-title-bar :title="title" @openDetail="onOpenDetail" />

    <div class="item">
      <div class="item-icon">
        <i class="el-icon-tickets" />
      </div>
      <div class="item-text">软件设计</div>
    </div>

    <div class="item">
      <div class="item-icon">
        <i class="el-icon-cpu" />
      </div>
      <div class="item-text">电子技术</div>
    </div>

    <div class="item">
      <div class="item-icon">
        <i class="el-icon-files" />
      </div>
      <div class="item-text">信息系统集成</div>
    </div>

    <div class="item">
      <div class="item-icon">
        <i class="el-icon-office-building" />
      </div>
      <div class="item-text">智能化建筑系统集成</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessInfoBox",

  data() {
    return {
      title: "业务介绍"
    };
  },

  methods: {
    onOpenDetail() {
      this.$router.push("/business");
    }
  }
};
</script>
