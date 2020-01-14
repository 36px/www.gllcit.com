
<style scoped>
.box-table {
  width: 100%;
}

.box-row {
  width: 100%;
}

.box-title {
  border-bottom-width: 5px;
  border-bottom-color: #04688e;
  border-bottom-style: solid;
  font-size: 20px;
  text-align: left;
  width: 81px;
}

.box-more {
  border-bottom-width: 5px;
  border-bottom-color: #88ceeb;
  border-bottom-style: solid;
  text-align: right;
}

button {
  border-width: 0px;
  border-style: none;
  background-color: transparent;
}
</style>

<template>
  <div>
    <table border="0" cellspacing="0" class="box-table">
      <tr class="box-row">
        <td class="box-title">{{title}}</td>
        <td class="box-more">
          <button @click="onClickMore">
            <!-- more -->
            详细
            <i class="el-icon-caret-right" />
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "BoxTitleBar",
  props: {
    title: String
  },

  methods: {
    onClickMore() {
      this.$emit("openDetail");
    }
  }
};
</script>
