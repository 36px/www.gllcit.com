<style scoped>
.case {
  display: inline-block;
  margin: 10px;
}

.case-image {
  width: 360px;
}
</style>


<template>
  <div class="hello">
    <box-title-bar :title="title" />

    <div>
      <span class="case">
        <a href="#">
          <img class="case-image" src="https://release.bitwormhole.com/static/gllcit.com/case1.png" />
        </a>
      </span>
      <span class="case">
        <a href="#">
          <img class="case-image" src="https://release.bitwormhole.com/static/gllcit.com/case2.png" />
        </a>
      </span>
      <span class="case">
        <a href="#">
          <img class="case-image" src="https://release.bitwormhole.com/static/gllcit.com/case3.png" />
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseInfoBox",

  data() {
    return {
      title: "成功案例"
    };
  }
};
</script>
