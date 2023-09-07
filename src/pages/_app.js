import "@/styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sui-In-Style | India | Elegance Stitched Just for You</title>
        <link rel="canonical" href={`http://sui-in-style.vercel.app`} />
        <meta property="og:site_name" content="Sui-In-Style" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`http://sui-in-style.vercel.app`} />
        <meta property="og:title" content={"Sui-In-Style"} />
        {/* <meta property="og:description" content={""} /> */}
        <meta
          name="description"
          content="Sui-In-Style offers bespoke designs, impeccable fittings, and personalized consultations. With a range of designs and styles, we create garments that reflect individuality and sophistication, ensuring every client leaves with a perfect fit and a sense of confidence in their attire."
        />

        <meta
          name="keywords"
          content="sui-in-style, boutique, tailoring shop, fashion shop, fashion, tailor, ladies fashion, ladies tailor dresses, women,attire, stitch"
        />

        <meta
          itemProp="name"
          content="Elegance Stitched Just for You | Sui-In-Style | India"
        />

        <meta
          itemProp="description"
          content="Sui-In-Style offers bespoke designs, impeccable fittings, and personalized consultations. With a range of designs and styles, we create garments that reflect individuality and sophistication, ensuring every client leaves with a perfect fit and a sense of confidence in their attire."
        />

        <meta itemProp="image" content="URL" />

        <meta name="robots" content="follow,index" />

        <link rel="canonical" href="http://sui-in-style.vercel.app" />

        <meta property="og:url" content="http://sui-in-style.vercel.app" />

        <meta
          property="og:title"
          content="Sui-In-Style | Elegance Stitched Just for You"
        />

        <meta
          property="og:description"
          content="We offer bespoke designs, impeccable fittings, and personalized consultations"
        />
        <meta
          property="og:image"
          itemProp="image"
          content={
            "https://ik.imagekit.io/o0spphqdc/SapmenC/images/SapMenC_Preview_irbVqejww.png?updatedAt=1690563691344"
          }
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="730" />
        <meta property="og:image:height" content="1200" />

        <meta name="twitter:card" content="summary" />

        <meta
          name="twitter:title"
          content="Sui-In-Style | Elegance Stitched Just for You"
        />

        <meta
          name="twitter:description"
          content="We offer bespoke designs, impeccable fittings, and personalized consultations"
        />

        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/o0spphqdc/SapmenC/images/SapMenC_Preview_irbVqejww.png?updatedAt=1690563691344"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
