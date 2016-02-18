declare module "node-sass" {
  interface RenderOptions {
    file: string,
    outputStyle?: string, // 'compressed'
    outFile?: string,
    sourceMap?: boolean, // or an absolute or relative-to-outFile path
  }

  interface RenderResult {
    map: {toString():string},
    css: {toString():string},
    stats: Object,
  }

  export function renderSync(options: RenderOptions): RenderResult;
}