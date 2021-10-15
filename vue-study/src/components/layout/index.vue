<template>
<div class="qf-layout">
  <QfNav />
  <QfContainer />
  <QfFooter />
</div>
</template>

<script>
import QfNav from './QfNav.vue'
import QfContainer from './QfContainer.vue'
import QfFooter from './QfFooter.vue'

export default {
  name: 'QfLayout',
  components: {
    QfNav,
    QfContainer,
    QfFooter
  }
}
</script>

<style lang="css" scoped>
</style>
