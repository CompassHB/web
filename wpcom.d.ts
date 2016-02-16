declare module "wpcom" {
    function wpcom(): wpcom.Client;
    
    module wpcom {
        
        export interface Client {
            site(domain: string): Site;
        }
        
        export interface Site {
            post(data: {slug?: string, id?: string}): Post;
            post(id: number): Post;
            postsList(): Promise<any>;
        }
        
        export interface Post {
            get(): Promise<any>;
        }
        
    }
    
    export = wpcom;
}