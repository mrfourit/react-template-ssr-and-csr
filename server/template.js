export const template = ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <link rel="stylesheet" href="/assets/styles/style.css">
      <body>
        <div id="root">${body}</div>
        <script type="text/javascript" src="/assets/js/main.js"></script>
        <script type="text/javascript" src="/assets/js/common.js"></script>
      </body>
    </html>
  `;
};