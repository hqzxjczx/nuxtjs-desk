// https://github.com/jackmellis/vue-hoc/blob/master/packages/vue-hoc/README.md
import { Table, TableColumn, Pagination } from 'element-ui'

// import { createHOC, createRenderFn } from 'vue-hoc'
// // import MyComponent from '../my-component'

// const options = {
//   name: 'EnHancedTable',
//   props: {
//     config: {}
//   },
//   computed: {
//     myComputedProperty() {
//       return this.someProp + ' computed'
//     }
//   },
//   created() {
//     console.log('Created')
//   }
//   // render(h){
//   //   return {
//   //     'div',
//   //     {
//   //     }
//   //   }
//   //   // return createRenderFn(Table, {})
//   //   // return createRenderFn(TableColumn, {})
//   //   // return createRenderFn(Pagination, {})
//   // }
// }

// const renderWith = {
//   props: {
//     someProp() {
//       return this.myComputedProperty
//     }
//   },
//   listeners: {
//     someEvent(arg) {
//       this.$emit('someOtherEvent', arg)
//     }
//   }
// }

// const enhanced = createHOC('div', options, renderWith)
// const enhanced = createHOC('div', options)

import VueHoc from 'vue-hoc'
console.log('VueHoc', VueHoc)
import VueCompose from 'vue-compose'
import * as VuexCompose from 'vuex-compose'
import Vue from 'vue'
console.log('VueCompose', VueCompose)
console.log('VuexCompose', VuexCompose)
import { createHOCc, createRenderFnc } from 'vue-hoc'
import { compose } from 'ramda'

// const withRenderFn = createRenderFnc({
//   mounted() {
//     console.log('withRenderFn')
//   }
//   // render(h) {
//   // }
//   // render: createRenderFn({})
// })

const withCreatedHook = createHOCc(
  {
    created() {
      console.log('Created')
    },
    render(h) {
      console.log('render', h, this)
      return <div>{this.someProp} withCreatedHook </div>
    }
  },
  null
)

const withAmendedProp = createHOCc(
  {
    beforeCreate() {
      console.log('beforeCreate withAmendedProp')
    }
  },
  {
    props: {
      someProp() {
        return this.someProp + ' amended'
      }
    }
  }
)

// we can now create a HOC using these methods
// const MyComponent2 = withCreatedHook(MyComponent)

// and we can do multiple hocs:
// const MyComponent3 = withAmendedProp(withCreatedHook(MyComponent))

// and with a composer like ramda's compose, we can make it more readable:
const enhanced = compose(
  // withRenderFn,
  withAmendedProp,
  withCreatedHook
)
// const MyComponent4 = enhance(MyComponent);

// enhanced('div')

var Component = Vue.extend({
  functional: true,
  props: {
    someProp: {
      type: String,
      default: ''
    }
  },
  render(h) {
    console.log('enhanced Component', this)
    let div = <div>this.someProp</div>
    return div
  }
})

export default enhanced(Component)
