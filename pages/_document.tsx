import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  //styled-components supports concurrent server side rendering, with stylesheet rehydration. 
  //The basic idea is that everytime you render your app on the server, you can create a 
  // ServerStyleSheet and add a provider to your React tree, that accepts styles via a context API
  //to use this with nextjs we hook it up with the getInitialProps, which waits until the method 
  //https://styled-components.com/docs/advanced
  //resolve before sending the data off from the srver to the broswer
 
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props:any) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
