<template>
  <div class="container">
    <CommonTable someProp="someProp CommonTable"></CommonTable>
    <wrapperHoc>fsfsf</wrapperHoc>
    <TestH someProp="someProp testh">
      <template #default="{def}">
        {{def.text}}
      </template>
      <template #title="{titleSlot}">
        <div>
          {{titleSlot}}
        </div>
      </template>
    </TestH>
    <div>
      <logo />
      <h1 class="title">
        nuxtjs-desk
      </h1>
      <h2 class="subtitle">
        My sensational Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import wrapperHoc from '~/components/wrapperHoc.js'
import TestH from './test-h'
import CommonTable from './commonTable'
console.log(TestH)
export default {
  components: {
    Logo,
    TestH: wrapperHoc(TestH),
    CommonTable: h => {
      console.log('Conmmon Table', h)
      return h(CommonTable)
    },
    wrapperHoc: {
      // functional: true,
      render(h) {
        console.log('wrapperHoc', this, this.$slots)
        // const slots = Object.keys(this.$slots)
        //   .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        //   .map(vnode => {
        //     vnode.context = this._self
        //     return vnode
        //   })

        return h(
          'div',
          {
            // 透传 监听函数
            on: this.$listeners,
            // 透传属性
            props: this.$props,
            // 透传 scopedSlots
            scopedSlots: this.$scopedSlots,
            // 透传 attrs
            attrs: this.$attrs
          },
          // 透传 slots 即 children
          Object.keys(this.$slots)
            .reduce((arr, key) => arr.concat(this.$slots[key]), [])
            .map(vn => {
              vn.context = this._self
              return vn
            })
        )
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
