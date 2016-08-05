/**
 * @fileoverview Dumping ground for all the custom typings we need that aren't
 *     already provided by the libraries themselves or by DefinitelyTyped.
 */

interface String {
  includes(substr: string): boolean;
}

declare module 'node-fetch' {
    function fetch(url: string|Request, init?: RequestInit): Promise<Response>;
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
    function renderToString(any): string;
    function renderToStaticMarkup(any): string;
}