Vue.component('qf-cnode-filter', {
  template: `
  <div class='cates'>
    <span
      v-for='item in data'
      v-text='item.label'
      :class='{"on": item.tab === value}'
      @click='$emit("input", item.tab)'
    >
    </span>
  </div>
  `,
  props: {
    data: { type: Array, required: false, default: [] },
    value: { type: String, required: false, default: '' }
  }
})
