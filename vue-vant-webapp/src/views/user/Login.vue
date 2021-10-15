<template>
<div class="qf-login">
  <QfNavBar>
    <template>
      <span>登录</span>
    </template>
    <template #right>
      <div @click='$router.replace("/regist")'>注册</div>
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
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">登录</van-button>
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
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('登录', this.form)
      this.$api.fetchLogin(this.form).then(res=>{
        console.log('登录res', res)
        // 把token存储到localStorage中
        localStorage.setItem('token', res.token)
        // 从哪里来的，回到哪里去
        this.$router.back()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.qf-login {
  padding-top: 1.6rem;
}
</style>
