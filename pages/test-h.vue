<template>
  <div class="test-h">
    test
    {{someProp}}
    <h3 @click="handleClick">{{title}}
      <slot
        name="title"
        :title-slot="titleSlots"
      >
        titleSlots title
      </slot>
    </h3>
    <slot :def="def"></slot>
  </div>
</template>
<script>
export default {
  name: 'test-h',
  props: {
    defaultProp: {
      type: Object,
      default: null
    },
    someProp: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      title: 'title test-h',
      titleSlots: {
        test: 'titleSlot'
      },
      def: {
        text: 'fsfsf'
      }
    }
  },
  methods: {
    handleClick() {
      console.log('testH click', this)
    }
  }
}
</script>
<style>
.test-h {
  color: red;
}
</style>