/// <reference types="vite/client" />

// ↓↓↓ useless if you have installed vue extension for vscode

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
