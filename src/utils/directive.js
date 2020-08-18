// 全局directive的写法
// 提交以后禁用按钮一段时间，防止重复提交
import Vue from 'vue'
Vue.directive('preventReClick', {
  inserted(el, binding) {
    el.addEventListener('click', e => {
      el.classList.add('is-disabled')
      el.disabled = true
      setTimeout(() => {
        el.disabled = false
        el.classList.remove('is-disabled')
      }, 3000)
    })
  }
})

// export default {
//   install(Vue) {
//     // 防重复点击(指令实现)
//     Vue.directive('preventReClick', {
//       inserted(el, binding) {
//         el.addEventListener('click', () => {
//           if (!el.disabled) {
//             el.disabled = true
//             setTimeout(() => {
//               el.disabled = false
//             }, binding.value || 3000)
//           }
//         })
//       }
//     })
//   }
// }
