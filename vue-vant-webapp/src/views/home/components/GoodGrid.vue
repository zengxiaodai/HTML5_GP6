<template>
<div class="qf-good-grid">
  <div class="qf-good" v-for='item in row' :key='item._id'>
    <div class="wrap" @click='skipToDetail(item)'>
      <img :src='$img.cdn+item.img' alt="" />
      <div>
        <span v-text='item.name'></span>
        <span v-text='item.price'></span>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: {
    row: { type: Array, required: true }
  },
  methods: {
    skipToDetail(ele) {
      console.log('ele', ele)
      this.$router.push(`/good/detail/${ele._id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-good-grid {
  padding: 0 .2rem;
  display: flex;
  .qf-good {
    flex: 1;
    width: 4.72rem;
    height: 5.1rem;
    background: rgba(247, 247, 247, 1);
    border-radius: .08rem;
    font-size: .4rem;
    line-height: .56rem;
    padding: .2rem;
    .wrap {
      background: white;
      padding: .19rem 0;
      &>img {
        width: 4.27rem;
        height: 4.27rem;
        display: block;
        margin: 0 auto;
      }
      &>div {
        box-sizing: border-box;
        padding: 0 .13rem;
      }
    }
  }
}

</style>
