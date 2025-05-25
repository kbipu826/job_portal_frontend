import Providers from "@/providers/Providers";
import ScriptProvider from "@/providers/ScriptProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css'
import Script from 'next/script';

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
        <ScriptProvider />
        <Script 
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
          onLoad={() => {
            console.log('✅ jQuery loaded');
          }}
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log('✅ Waypoints loaded');
          }}
        />
      </body>
    </html>
  );
}
