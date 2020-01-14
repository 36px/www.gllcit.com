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
    <box-title-bar :title="title" @openDetail="onOpenDetail" />

    <div>
      <span class="case">
        <a @click="onOpenDetail">
          <img
            class="case-image"
            src="https://release.bitwormhole.com/static/gllcit.com/projects/kyxmglxt.png"
          />
        </a>
      </span>
      <span class="case">
        <a @click="onOpenDetail">
          <img
            class="case-image"
            src="https://release.bitwormhole.com/static/gllcit.com/projects/wjzlgxxt.png"
          />
        </a>
      </span>
      <span class="case">
        <a @click="onOpenDetail">
          <img
            class="case-image"
            src="https://release.bitwormhole.com/static/gllcit.com/projects/xtbgxt.png"
          />
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
  },

  methods: {
    onOpenDetail() {
      this.$router.push("/projects");
    }
  }
};
</script>
