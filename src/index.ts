import type { App, DirectiveBinding, VNode } from "vue"

const install = (app: App, option?: { prefix: string }) => {
    app.directive('template', {
        mounted(el: HTMLElement, binding: DirectiveBinding<string>, _vnode: VNode) {
            el.innerHTML = `${option.prefix}---${binding.value}`
        }
    })
}

export { install as rollupVue3TsPluginTemplate }

export default {
    install
}