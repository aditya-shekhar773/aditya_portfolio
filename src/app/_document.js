// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Other head elements */}
          <meta name="google-site-verification" content="H4gNKtuaXkIyq9TrTcPP8RPZux_YQDeEvVGxi8Cfd6M" />        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
