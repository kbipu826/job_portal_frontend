'use client';

import Script from "next/script";
import { useEffect, useState } from "react";

export default function ScriptProvider() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // Core scripts that need to load first
  const coreScripts = [
    { src: "js/jquery-3.6.0.min.js", strategy: "beforeInteractive" },
    { src: "js/popper.min.js", strategy: "beforeInteractive" },
    { src: "js/bootstrap.min.js", strategy: "beforeInteractive" }
  ];

  // DataTables related scripts in correct order
  const dataTableScripts = [
    { src: "js/jquery.dataTables.min.js", strategy: "afterInteractive" },
    { src: "js/dataTables.bootstrap5.min.js", strategy: "afterInteractive" }
  ];

  // Scripts that depend on waypoints need to load after it
  const waypointsScripts = [
    { src: "js/waypoints.min.js", strategy: "lazyOnload" },
    { src: "js/waypoints-sticky.min.js", strategy: "lazyOnload" },
    { src: "js/counterup.min.js", strategy: "lazyOnload" }
  ];

  // Other scripts that can load later
  const otherScripts = [
    { src: "js/magnific-popup.min.js", strategy: "lazyOnload" },
    { src: "js/isotope.pkgd.min.js", strategy: "lazyOnload" },
    { src: "js/imagesloaded.pkgd.min.js", strategy: "lazyOnload" },
    // Moving owl.carousel before custom.js since it's a dependency
    { src: "js/owl.carousel.min.js", strategy: "afterInteractive" },
    { src: "js/theia-sticky-sidebar.js", strategy: "lazyOnload" },
    { src: "js/lc_lightbox.lite.js", strategy: "lazyOnload" },
    { src: "js/bootstrap-select.min.js", strategy: "afterInteractive" },
    { src: "js/dropzone.js", strategy: "lazyOnload" },
    { src: "js/jquery.scrollbar.js", strategy: "lazyOnload" },
    { src: "js/bootstrap-datepicker.js", strategy: "lazyOnload" },
    { src: "js/chart.js", strategy: "lazyOnload" },
    { src: "js/anm.js", strategy: "lazyOnload" },
    { src: "js/bootstrap-slider.min.js", strategy: "lazyOnload" },
    { src: "js/swiper-bundle.min.js", strategy: "lazyOnload" },
    { src: "js/custom.js", strategy: "lazyOnload" },
    { src: "js/switcher.js", strategy: "lazyOnload" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setScriptsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Load core scripts first */}
      {coreScripts.map((script, index) => (
        <Script 
          key={`core-${index}`}
          src={script.src}
          strategy={script.strategy as "beforeInteractive" | "lazyOnload" | "afterInteractive" | "worker"}
          onLoad={() => console.log(`Core script loaded: ${script.src}`)}
          onError={(e) => console.error(`Core script failed to load: ${script.src}`, e)}
        />
      ))}

      {/* Load DataTables scripts after core */}
      {dataTableScripts.map((script, index) => (
        <Script
          key={`datatable-${index}`}
          src={script.src}
          strategy={script.strategy as "beforeInteractive" | "lazyOnload" | "afterInteractive" | "worker"}
          onLoad={() => console.log(`DataTable script loaded: ${script.src}`)}
          onError={(e) => console.error(`DataTable script failed to load: ${script.src}`, e)}
        />
      ))}

      {/* Load waypoints and dependent scripts */}
      {waypointsScripts.map((script, index) => (
        <Script
          key={`waypoints-${index}`}
          src={script.src}
          strategy={script.strategy as "beforeInteractive" | "lazyOnload" | "afterInteractive" | "worker"}
          onLoad={() => console.log(`Waypoints script loaded: ${script.src}`)}
          onError={(e) => console.error(`Waypoints script failed to load: ${script.src}`, e)}
        />
      ))}

      {/* Load other scripts last */}
      {otherScripts.map((script, index) => (
        <Script
          key={`other-${index}`}
          src={script.src}
          strategy={script.strategy as "beforeInteractive" | "lazyOnload" | "afterInteractive" | "worker"}
          onLoad={() => console.log(`Script loaded: ${script.src}`)}
          onError={(e) => console.error(`Script failed to load: ${script.src}`, e)}
        />
      ))}
    </>
  );
}