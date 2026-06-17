/* 

FOR GOOGLE ANALYTICS ONLY.

- If you DO NOT want to use google Analytics, delete this file 
and the `useRouter` & `useEffect` from _app.js (lines 6 through 18).

- If you DO want to use google analytics, update lines 32, and 41 with YOUR gtag.
you will also have to update _app.js to use YOUR gtag.

*/

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jacquard+12+Charted&family=Jacquard+24&family=Metamorphous&display=swap"
            rel="stylesheet"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-MRVYE2Z0S0"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MRVYE2Z0S0', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
