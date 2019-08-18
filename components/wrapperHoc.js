// export default function(WrappedComponent) {
//   return {
//     mounted() {
//       console.log('I have already mounted')
//     },
//     props: WrappedComponent.props,
//     render(h) {
//       console.log('WrappedComponent', WrappedComponent, this)
//       const slots = Object.keys(this.$slots)
//         .reduce((arr, key) => arr.concat(this.$slots[key]), [])
//         .map(vnode => {
//           vnode.context = this._self
//           return vnode
//         })

//       return h(
//         WrappedComponent,
//         {
//           on: this.$listeners,
//           props: this.$props,
//           // 透传 scopedSlots
//           scopedSlots: this.$scopedSlots,
//           attrs: this.$attrs
//         },
//         slots
//       )
//     }
//   }
// }

import VueHoc from 'vue-hoc'
console.log('VueHoc', VueHoc)
import VueCompose from 'vue-compose'
import * as VuexCompose from 'vuex-compose'

console.log('VueCompose', VueCompose)
console.log('VuexCompose', VuexCompose)
import { createHOCc } from 'vue-hoc'
import { compose } from 'ramda'

// import MyComponent from '../my-component';

const withCreatedHook = createHOCc(
  {
    created() {
      console.log('Created')
    },
    methods: {
      handleClick() {
        console.log('enhanced handle', this)
      }
    }
  },
  {
    listeners: {
      click(arg) {
        console.log('listeners')
        this.handleClick(arg)
      }
    }
  }
)

const withAmendedProp = createHOCc(null, {
  props: {
    someProp() {
      return this.someProp + ' amended'
    }
  },
  methods: {
    // handleClick() {
    //   console.log('enhanced handle', this)
    // }
  }
})

// we can now create a HOC using these methods
// const MyComponent2 = withCreatedHook(MyComponent)

// and we can do multiple hocs:
// const MyComponent3 = withAmendedProp(withCreatedHook(MyComponent))

// and with a composer like ramda's compose, we can make it more readable:
const enhance = compose(
  withAmendedProp,
  withCreatedHook
)
// const MyComponent4 = enhance(MyComponent);
export default enhance

// import {
//   compose,
//   withProps,
//   defaultProps,
//   withHandlers,
//   withData,
//   setName
// } from 'vue-compose'
// // import C from './component.vue';

// const enhance = compose(
//   withProps(props => ({
//     someProp: 'foo'
//   })),
//   defaultProps({
//     notPassedIn: true
//   }),
//   withHandlers({
//     someEvent(e) {
//       // do some stuff
//     }
//   }),
//   withData({
//     someDataProp: {
//       initialValue: 'bah',
//       listener: 'updateBah'
//     }
//   })
//   // setName('TestH')
// )

// // const enhanced = enhance(C);

// export default enhance
