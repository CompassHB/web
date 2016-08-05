import * as ReactDOMServer from "react-dom/server";

export function renderHtmlPage(title: string, reactElement) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/ui/pages/index-client.bundle.js" async></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        <link href='https://fonts.googleapis.com/css?family=Roboto|Fira+Sans:700' rel='stylesheet' type='text/css'>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
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
      </body>
    </html>
  `;
}