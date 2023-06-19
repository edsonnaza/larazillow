import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import  MainLayout  from '@/Layout/MainLayout.vue'
import { ZiggyVue } from 'ziggy'
import '../css/app.css'



createInertiaApp({
  progress: {
    delay: 250,
    color: '#29d',
    includeCSS: true,
    showSpinner: true,
  },
  resolve: async (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue')

    const page = await pages[`./Pages/${name}.vue`]()
    page.default.layout = page.default.layout || MainLayout

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .mount(el)
  },
})

