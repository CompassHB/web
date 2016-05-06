interface String {
  includes(substr: string): boolean;
}

declare module 'node-fetch' {
    function fetch(url: string|Request, init?: RequestInit): Promise<Response>;
    export default fetch;
}