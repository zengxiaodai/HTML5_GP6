<template>
  <div class="app-container good-info-container">
    <div class="tips">
      <div v-text='tip'></div>
    </div>
    <div class="form">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>

        <el-form-item label="商品描述" prop="desc">
          <el-input
            type="textarea"
            :rows="3"
            v-model="ruleForm.desc">
          </el-input>
        </el-form-item>

        <el-form-item label="商品品类" prop='cate'>
          <CateSelect v-model='ruleForm.cate' />
        </el-form-item>

        <el-form-item label="商品价格" prop="price">
          <el-input-number
            v-model.number="ruleForm.price"
            controls-position="right"
            :min="0"/>
        </el-form-item>

        <el-form-item label="是否热销" prop="hot">
          <el-switch
            v-model="ruleForm.hot"
            active-color="#1890ff"
            inactive-color="#dddddd">
          </el-switch>
        </el-form-item>

        <el-form-item label="商品图片" prop="img">
          <ImgUpload v-model='ruleForm.img' />
        </el-form-item>
      </el-form>
    </div>

    <div class="submit" :style='submitStyle'>
      <el-button
        size='small'
        type="primary"
        @click="submit"
        v-text='btnText'
        style="marginTop:15px;"
      />

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CateSelect from './components/CateSelect.vue'
import ImgUpload from './components/ImgUpload.vue'
export default {
  name: 'GoodAdd',
  components: { CateSelect, ImgUpload },
  props: {
    id: { type: String, default: '' }
  },
  data() {
    // do something
    var priceVal = (rule, value, callback) => {
      if(value<=0) {
        callback(new Error('价格不能小于0'))
      }
    }
    return {
      width: 1000,
      ruleForm: {
        name: '',
        desc: '',
        cate: '',
        price: 0,
        hot: false,
        img: ''
      },
      // async-validator 第三库
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入商品描述', trigger: 'blur' },
          { min: 10, max: 20, message: '长度在 10 到 20 个字符', trigger: 'blur' }
        ],
        cate: [
          { required: true, message: '请选择品类', trigger: 'change' }
        ],
        price: [
          { required: true, validator: priceVal, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    tip() { return this.id ? '商品编辑': '商品新增'},
    btnText() { return this.id ? '立即修改': '立即添加' },
    submitStyle() {
      if(this.width < 945) {
        return {left: 0 }
      }else  {
        return {left: this.sidebar.opened ? "210px" : '54px'}
      }
    }
  },
  created() {
    if(this.id) {
      this.$api.getGoodInfo({id:this.id}).then(res=>{
        console.log('商品详情', res)
        this.ruleForm = res.data.info
      })
    }
  },
  mounted() {
    console.log('id', this.id)
    console.log('sidebar', this.sidebar)
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize(e) {
      this.width = this.$el.getBoundingClientRect().width
    },
    submit() {
      console.log('提交', this.ruleForm)
      const params = this.ruleForm
      if(this.id) params.id = this.id
      this.$api.updateGood(params).then((res)=>{
        // 弹框提示成功并跳转到上一页
        this.$msg.success(res.msg,1000,()=>this.$router.back())
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.good-info-container {
  padding-bottom: 120px;
  .tips {
    padding: 25px 0;
    border-bottom: 1px solid #eee;
  }
  .form {
    margin-top: 25px;
    width: 60%;
  }
  .submit {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55px;
    border-top: 1px solid #ccc;
    z-index: 9999;
    background-color: white;
    text-align: center;
  }
}

</style>
