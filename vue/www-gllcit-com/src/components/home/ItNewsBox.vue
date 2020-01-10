
<style scoped>
.item-title {
  padding: 5px;
  text-align: left;
}

.item-date {
  padding: 5px;
  text-align: right;
}
</style>

<template>
  <div class="hello">
    <box-title-bar :title="title" />

    <table style="width: 100%">
      <tr class="table-item" v-for="item in tableData " v-bind:key="item.id">
        <td class="item-title" label width="180">
          <a href="#">{{item.title}}</a>
        </td>
        <td class="item-date" label width="180">{{item.date}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ItNewsBox",

  data() {
    return {
      title: "行业新闻",
      tableData: [{ title: "t1", date: 1999999 }]
    };
  },

  mounted() {
    this.initTableWithMockData();
  },

  methods: {
    initTableWithMockData() {
      var list = [];

      for (var i = 1; i < 10; ++i) {
        var id = i;
        var title = "title-" + i;
        var date = 1999999999 + i;
        var item = { id, title, date };
        list.push(item);
      }

      this.tableData = list;
    }
  }
};
</script>
