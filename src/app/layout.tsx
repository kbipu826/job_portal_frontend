import Providers from "@/providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Portal - Find Your Dream Job",
  description: "Find the best job opportunities and connect with top employers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const stylesheets = [
    "css/bootstrap.min.css",
    "css/feather.css",
    "css/owl.carousel.min.css",
    "css/magnific-popup.min.css",
    "css/lc_lightbox.css",
    "css/bootstrap-select.min.css",
    "css/dataTables.bootstrap5.min.css",
    "css/select.bootstrap5.min.css",
    "css/dropzone.css",
    "css/scrollbar.css",
    "css/datepicker.css",
    "css/flaticon.css",
    "css/swiper-bundle.min.css",
    "css/style.css",
    "css/skins-type/skin-6.css",
    "css/switcher.css"
  ];

  const scripts = [
    { src: "js/jquery-3.6.0.min.js", strategy: "beforeInteractive" },
    { src: "js/popper.min.js", strategy: "beforeInteractive" },
    { src: "js/bootstrap.min.js", strategy: "lazyOnload" },
    { src: "js/magnific-popup.min.js", strategy: "lazyOnload" },
    { src: "js/waypoints.min.js", strategy: "lazyOnload" },
    { src: "js/counterup.min.js", strategy: "lazyOnload" },
    { src: "js/waypoints-sticky.min.js", strategy: "lazyOnload" },
    { src: "js/isotope.pkgd.min.js", strategy: "lazyOnload" },
    { src: "js/imagesloaded.pkgd.min.js", strategy: "lazyOnload" },
    { src: "js/owl.carousel.min.js", strategy: "lazyOnload" },
    { src: "js/theia-sticky-sidebar.js", strategy: "lazyOnload" },
    { src: "js/lc_lightbox.lite.js", strategy: "lazyOnload" },
    { src: "js/bootstrap-select.min.js", strategy: "lazyOnload" },
    { src: "js/dropzone.js", strategy: "lazyOnload" },
    { src: "js/jquery.scrollbar.js", strategy: "lazyOnload" },
    { src: "js/bootstrap-datepicker.js", strategy: "lazyOnload" },
    { src: "js/jquery.dataTables.min.js", strategy: "lazyOnload" },
    { src: "js/dataTables.bootstrap5.min.js", strategy: "lazyOnload" },
    { src: "js/chart.js", strategy: "lazyOnload" },
    { src: "js/anm.js", strategy: "lazyOnload" },
    { src: "js/bootstrap-slider.min.js", strategy: "lazyOnload" },
    { src: "js/swiper-bundle.min.js", strategy: "lazyOnload" },
    { src: "js/custom.js", strategy: "lazyOnload" },
    { src: "js/switcher.js", strategy: "lazyOnload" }
  ];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
        {stylesheets.map((href, index) => (
          <link key={index} rel="stylesheet" type="text/css" href={href} />
        ))}
      </head>
      <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        {scripts.map((script, index) => (
          <Script key={index} src={script.src} strategy={script.strategy as "beforeInteractive" | "lazyOnload" | "afterInteractive" | "worker"} />
        ))}
      </body>
    </html>
  );
}
