/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly FATHOM_ANALYTICS: string;
  }
}
