/* eslint-disable import/no-duplicates */
import { Notify, Quasar } from 'quasar'
import * as components from 'quasar'
import * as directives from 'quasar'
import langJa from 'quasar/lang/ja'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    config: {},
    components,
    directives,
    plugins: { Notify },
    lang: langJa,
  })
})
