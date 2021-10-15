<template>
<div v-if='show' class="qf-no-data" :style='{width}'>
  <img :src="$img.notIcon" alt="" />
  <div>暂无数据</div>
</div>
</template>

<script>
export default {
  props: {
    width: { type: String, required: false, default: '50%' },
    show: { type: Boolean, required: false, default: false }
  }
}
</script>

<style lang="scss" scoped>
.qf-no-data {
  width: 5rem;
  margin: .33rem auto;
  font-size: .4rem;
  color: #888888;
  text-align: center;
  line-height: .93rem;
  &>img {
    display: block;
    width: 100%;
  }
}
</style>
