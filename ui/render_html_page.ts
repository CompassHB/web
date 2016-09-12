import * as ReactDOMServer from "react-dom/server";

export function renderHtmlPage(title: string, reactElement: any) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Fira+Sans:700" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha256-916EbMg70RQy9LHiGkXzG8hSg9EdNy97GazNG/aiY1w=" crossorigin="anonymous" />
        <style>
          img {
            max-width: 100%;
            height: auto;
          }
        </style>
      </head>
      <body>
        <div id="root">
          ${ReactDOMServer.renderToStaticMarkup(reactElement)}
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha256-U5ZEeKfGNOja007MMD3YBI0A3OSZOQbeG6z2f2Y0hu8=" crossorigin="anonymous"></script>
        <script src="/ui/common.js" crossorigin="anonymous"></script>
      </body>
    </html>
  `;
}
