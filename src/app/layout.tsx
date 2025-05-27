import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Job Portal',
  description: 'Find your dream job',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* META */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta name="robots" content="" />
        <meta name="description" content="" />

        {/* FAVICONS ICON */}
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />

        {/* MOBILE SPECIFIC */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* CSS FILES */}
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/feather.css" />
        <link rel="stylesheet" type="text/css" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/lc_lightbox.css" />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap-select.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/dataTables.bootstrap5.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/select.bootstrap5.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/dropzone.css" />
        <link rel="stylesheet" type="text/css" href="/css/scrollbar.css" />
        <link rel="stylesheet" type="text/css" href="/css/datepicker.css" />
        <link rel="stylesheet" type="text/css" href="/css/flaticon.css" />
        <link rel="stylesheet" type="text/css" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/css/skins-type/skin-6.css" />
        <link rel="stylesheet" type="text/css" href="/css/switcher.css" />

        {/* Font Preload */}
        <link rel="preload" href="/fonts/flaticon.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}

        {/* JAVASCRIPT FILES */}
        <script src="/js/jquery-3.6.0.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/magnific-popup.min.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/counterup.min.js"></script>
        <script src="/js/waypoints-sticky.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/theia-sticky-sidebar.js"></script>
        <script src="/js/lc_lightbox.lite.js"></script>
        <script src="/js/bootstrap-select.min.js"></script>
        <script src="/js/dropzone.js"></script>
        <script src="/js/jquery.scrollbar.js"></script>
        <script src="/js/bootstrap-datepicker.js"></script>
        <script src="/js/jquery.dataTables.min.js"></script>
        <script src="/js/dataTables.bootstrap5.min.js"></script>
        <script src="/js/chart.js"></script>
        <script src="/js/bootstrap-slider.min.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/custom.js"></script>
        <script src="/js/switcher.js"></script>
      </body>
    </html>
  );
}
