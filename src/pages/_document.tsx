import Document, { Html, Head, Main, NextScript } from "next/document";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import type { DocumentContext } from "next/document";

const NextDocument = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

NextDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initalProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initalProps,
    styles: (
      <>
        {initalProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};

export default NextDocument;
