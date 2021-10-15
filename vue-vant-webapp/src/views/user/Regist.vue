<template>
<div class="qf-regist">
  <QfNavBar>
    <template>
      <span>注册</span>
    </template>
    <template #right>
      <div @click='$router.replace("/login")'>登录</div>
    </template>
  </QfNavBar>

  <van-form @submit="onSubmit">
    <van-field
      v-model="form.username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="form.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="form.password2"
      type="password"
      name="确认密码"
      label="确认密码"
      placeholder="确认密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">注册</van-button>
    </div>
  </van-form>
</div>
</template>

<script>
import { QfNavBar } from '@/components'
export default {
  components: {
    QfNavBar
  },
  data() {
    return {
      form:  {
        username: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    onSubmit() {
      // console.log('注册', this.form)
      // md5加密
      if(this.form.password!==this.form.password2 ) {
        this.$toast.fail('两次密码不相同')
      }else{
        this.$api.fetchRegist(this.form).then(()=>{
          this.$router.replace('/login')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-regist {
  padding-top: 1.6rem;
}
</style>
