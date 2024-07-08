import { revalidate } from "@module-federation/nextjs-mf/utils";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Document.getInitialProps =  async (ctx: any) => {
//   let initialProps: any = {};

//   if (ctx?.pathname && !ctx?.pathname?.endsWith('_error')) {
//     await revalidate().then((shouldUpdate) => {
//       if (shouldUpdate) {
//         initialProps = { shouldUpdate }; 
//         console.log('Hot Module Replacement (HMR) activated', shouldUpdate);
//       }
//     }).catch((err) => {
//       console.error('Error during SSR', err);
//     });
//   }

//   console.log(ctx);
//   return initialProps;
// }
