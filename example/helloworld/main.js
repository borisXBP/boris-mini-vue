import { createApp } from '../../lib/roger-mini-vue.esm.js'
import { App } from './App.js'
 
// vue3

const rootContainer = document.querySelector('#app')
createApp(App).mount(rootContainer)