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

  // ✅ 1. Load jQuery first and wait for it to be ready
  useEffect(() => {
    const loadJQuery = async () => {
      try {
        // Load jQuery
        await loadScript('/js/jquery-3.6.0.min.js');
        
        // Wait for jQuery to be fully initialized
        await new Promise<void>((resolve) => {
          const checkJQuery = setInterval(() => {
            if (window.jQuery && typeof window.jQuery === 'function') {
              clearInterval(checkJQuery);
              resolve();
            }
          }, 100);
        });

        console.log('✅ jQuery loaded and initialized');
        setJQueryReady(true);
      } catch (e) {
        console.error('❌ Failed to load jQuery', e);
      }
    };

    loadJQuery();
  }, []);

  // ✅ 2. Load Bootstrap and core dependencies after jQuery
  useEffect(() => {
    if (!jQueryReady) return;

    const loadCoreScripts = async () => {
      try {
        await loadScript('/js/popper.min.js');
        await loadScript('/js/bootstrap.min.js');
        console.log('✅ Core bootstrap scripts loaded');
      } catch (e) {
        console.error('❌ Failed to load core scripts', e);
      }
    };

    loadCoreScripts();
  }, [jQueryReady]);

  // ✅ 3. Load jQuery plugins after core scripts
  useEffect(() => {
    if (!jQueryReady) return;

    const loadPlugins = async () => {
      try {
        // Load plugins in correct order
        const plugins = [
          '/js/owl.carousel.min.js',
          '/js/jquery.magnific-popup.min.js',
          '/js/lc_lightbox.lite.js',
          '/js/bootstrap-select.min.js',
          '/js/jquery.dataTables.min.js',
          '/js/dataTables.bootstrap5.min.js',
          '/js/select.bootstrap5.min.js',
          '/js/waypoints.min.js',
          '/js/jquery.waypoints.min.js',
          '/js/waypoints-sticky.min.js',
          '/js/counterup.min.js',
          '/js/isotope.pkgd.min.js',
          '/js/imagesloaded.pkgd.min.js',
          '/js/theia-sticky-sidebar.js',
          '/js/dropzone.js',
          '/js/jquery.scrollbar.min.js',
          '/js/bootstrap-datepicker.js',
          '/js/chart.js',
          '/js/anm.js',
          '/js/bootstrap-slider.min.js',
          '/js/swiper-bundle.min.js',
          '/js/switcher.js'
        ];

        for (const plugin of plugins) {
          await loadScript(plugin);
        }

        console.log('✅ All jQuery plugins loaded');
        setPluginsReady(true);
      } catch (e) {
        console.error('❌ Failed to load jQuery plugins', e);
      }
    };

    loadPlugins();
  }, [jQueryReady]);

  // ✅ 4. Load custom.js last
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

  return null;
}
