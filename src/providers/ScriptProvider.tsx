'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Declare jQuery types
declare global {
  interface Window {
    jQuery: {
      fn: any;
      [key: string]: any;
    };
  }
}

export default function ScriptProvider() {
  const [jQueryReady, setJQueryReady] = useState(false);
  const [pluginsReady, setPluginsReady] = useState(false);

  // ✅ 1. Load jQuery and core scripts first
  useEffect(() => {
    const loadCoreScripts = async () => {
      try {
        // jQuery
        await loadScript('/js/jquery.min.js');
        console.log('✅ jQuery loaded');

        // Wait for jQuery to be fully initialized
        await new Promise(resolve => {
          const checkJQuery = setInterval(() => {
            if (window.jQuery && window.jQuery.fn) {
              clearInterval(checkJQuery);
              resolve(true);
            }
          }, 100);
        });

        // Bootstrap dependencies
        await loadScript('/js/popper.min.js');
        await loadScript('/js/bootstrap.bundle.min.js');
        console.log('✅ Core bootstrap scripts loaded');
        setJQueryReady(true);
      } catch (e) {
        console.error('❌ Failed to load core scripts', e);
      }
    };

    loadCoreScripts();
  }, []);

  // ✅ 2. Load all jQuery plugins after jQuery is ready
  useEffect(() => {
    if (!jQueryReady) return;

    const loadPlugins = async () => {
      try {
        // jQuery plugins (in correct order)
        await loadScript('/js/owl.carousel.min.js');
        await loadScript('/js/jquery.magnific-popup.min.js');
        await loadScript('/js/lc_lightbox.lite.js');
        await loadScript('/js/bootstrap-select.min.js');
        await loadScript('/js/jquery.dataTables.min.js');
        await loadScript('/js/dataTables.bootstrap5.min.js');
        await loadScript('/js/select.bootstrap5.min.js');
        await loadScript('/js/waypoints.min.js');
        await loadScript('/js/jquery.waypoints.min.js');
        await loadScript('/js/waypoints-sticky.min.js');
        await loadScript('/js/counterup.min.js');
        await loadScript('/js/isotope.pkgd.min.js');
        await loadScript('/js/imagesloaded.pkgd.min.js');
        await loadScript('/js/theia-sticky-sidebar.js');
        await loadScript('/js/dropzone.js');
        await loadScript('/js/jquery.scrollbar.min.js');
        await loadScript('/js/bootstrap-datepicker.js');
        await loadScript('/js/chart.js');
        await loadScript('/js/anm.js');
        await loadScript('/js/bootstrap-slider.min.js');
        await loadScript('/js/swiper-bundle.min.js');
        await loadScript('/js/switcher.js');

        console.log('✅ All jQuery plugins loaded');
        setPluginsReady(true);
      } catch (e) {
        console.error('❌ Failed to load jQuery plugins', e);
      }
    };

    loadPlugins();
  }, [jQueryReady]);

  // ✅ 3. Load custom.js last
  useEffect(() => {
    if (!pluginsReady) return;

    const loadCustom = async () => {
      try {
        await loadScript('/js/custom.js');
        console.log('✅ custom.js loaded');
      } catch (e) {
        console.error('❌ Failed to load custom.js', e);
      }
    };

    loadCustom();
  }, [pluginsReady]);

  // 📦 Helper: load script dynamically
  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.onload = () => resolve();
      script.onerror = (err) => reject(err);
      document.body.appendChild(script);
    });
  };

  return null; // All handled via dynamic injection
}
