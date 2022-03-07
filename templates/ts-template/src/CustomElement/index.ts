import { defineCustomElement } from 'vue'
import VueDarkModeSwitch from './index.ce.vue'

// Vue generates a new HTML element class from the component definition.
export const DarkModeSwitch = defineCustomElement(VueDarkModeSwitch)

// Register the custom element so that it can be used as <dark-mode-switch>.
export function register (tagName: string = 'dark-mode-switch') {
  customElements.define(tagName, DarkModeSwitch)
}