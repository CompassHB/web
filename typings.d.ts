/**
 * @fileoverview Dumping ground for all the custom typings we need that aren't
 *     already provided by the libraries themselves or by DefinitelyTyped.
 */

interface String {
  includes(substr: string): boolean;
}

declare module 'node-fetch' {
  function fetch(url: string | Request, init?: RequestInit): Promise<Response>;
  export default fetch;
}

declare module "node-sass" {
  interface RenderOptions {
    file: string,
    outputStyle?: string, // 'compressed'
    outFile?: string,
    sourceMap?: boolean, // or an absolute or relative-to-outFile path
  }

  interface RenderResult {
    map: { toString(): string },
    css: { toString(): string },
    stats: Object,
  }

  export function renderSync(options: RenderOptions): RenderResult;
}

declare module "react-tap-event-plugin" {
  function injectTapEventPlugin(): void;

  module injectTapEventPlugin { }

  export = injectTapEventPlugin;
}

// @TODO: Temporary fix. Not sure why this is missing from react-dom typings...
declare module "react-dom/server" {
  function renderToString(e: any): string;
  function renderToStaticMarkup(e: any): string;
}

// SERVICE WORKER TYPES
// These are necessary because the publicly available ones (service_worker_api)
// conflict with the existing WhatWG types.

interface ExtendableEvent {
  waitUntil(promise: Promise<void>): void;
}

interface InstallEvent extends ExtendableEvent {

}

interface FetchEvent extends ExtendableEvent {
  request: Request;
  respondWith(promise: Promise<Response>): void;
}

interface Cache {
  add(request: Request): Promise<Response>;
  match(request: Request): Promise<Response>;
}

interface Caches {
  open(name: string): Cache;
}

interface Window {
  addEventListener(type: 'install', listener: (event: InstallEvent) => void): void;
  addEventListener(type: 'fetch', listener: (event: FetchEvent) => void): void;
}

declare var caches: Caches;

interface Navigator {
  serviceWorker?: ServiceWorker;
}

interface ServiceWorker {
  register(url: string): Promise<void>;
}