<template>
<div class="qf-cate-select">
  <el-select
    :value="value"
    clearable
    size="small"
    placeholder="全部"
    @change='handleChange'
  >
    <el-option
      v-for="item in cates"
      :key="item._id"
      :label="item.cate_zh"
      :value="item.cate"
    />
  </el-select>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    value: { type: String, default: '' }
  },
  computed: {
    ...mapGetters(['cates'])
  },
  created() {
    this.getCates()
  },
  methods: {
    ...mapActions('good', ['getCates']),
    handleChange(val) {
      this.$emit("input", val)
      // 触发父组件给的change方法
      this.$emit('change')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
