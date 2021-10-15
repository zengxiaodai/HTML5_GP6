<template>
<div class="qf-img-upload">
  <el-upload
    name='good'
    :action="`${$img.updBase}/api/v1/element/upload/img`"
    :headers='{Authorization: token}'
    list-type='picture-card'
    :limit='1'
    drag
    :on-success='res=>$emit("input", res.data.img)'
    :on-remove='()=>$emit("input", "")'
    :class='[value ? "one" : ""]'
    :file-list='fileList'
  >
    <div>
      <i class="el-icon-upload"></i>
      <div>将文件拖到此处，或<em>点击上传</em></div>
      <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </div>
  </el-upload>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    value: { type: String, default: '' }
  },
  computed: {
    ...mapGetters(['token']),
    fileList() {
      if(this.value) {
        return [{name:'good', url:this.$img.imgBase+this.value}]
      }else{
        return []
      }
    }
  },
  methods: {
    imgSuccess(res) {
      this.$emit('input', res.data.img)
    },
  }
}
</script>

<style lang="scss">
.one {
  .el-upload--picture-card {
    display: none;
  }
  // .el-upload-dragger {
  //   display: none !important;
  // }
}
</style>
