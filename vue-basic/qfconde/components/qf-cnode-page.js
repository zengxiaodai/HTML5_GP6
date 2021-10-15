Vue.component('qf-cnode-page', {
  template: `
  <div class='pages'>
    <span
      @click='prev'
      :style='{cursor: value===1 ? "default": "pointer"}'
    >
      <<
    </span>

    <span v-if='value>3'>...</span>

    <span
      v-for='i in arr'
      v-text='i'
      :class='{"on": i===value}'
      @click='$emit("input", i)'
    ></span>


    <span>...</span>
    <span @click='$emit("input", value+1)'>>></span>
  </div>
  `,
  props: {
    value: { type: Number, required: false, default: 1 }
  },
  computed: {
    arr(){
      // 根据this.value来决定
      // value=1   1  2  3  4  5
      // value=2   1  2  3  4  5
      // value=3   1  2  3  4  5
      // value=4   2  3  4  5  6
      // value=n   value-2 value-1 value value+1 value+2
      const v = this.value
      return v>3 ? [v-2,v-1,v,v+1,v+2] : [1,2,3,4,5]
    }
  },
  methods: {
    prev() {
      if(this.value===1) return alert('已经是第一页的')
      this.$emit("input", this.value-1)
    }
  }
})
