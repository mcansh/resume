/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly FATHOM_ANALYTICS: string;
  }
}

interface Window {
  ENV: NodeJS.ProcessEnv;
}
