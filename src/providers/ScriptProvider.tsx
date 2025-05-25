'use client';

import { useEffect } from 'react';

// Declare jQuery type on window object
declare global {
  interface Window {
    jQuery: any;
  }
}

// Client-side script loader component
const ClientScriptLoader = () => {
  useEffect(() => {
    const loadScripts = async () => {
      try {
        // Load jQuery first
        if (!window.jQuery) {
          const jqueryScript = document.createElement('script');
          jqueryScript.src = '/js/jquery.min.js';
          jqueryScript.async = false;
          document.head.appendChild(jqueryScript);
        }

        // Wait for jQuery to be available
        const checkJQuery = setInterval(() => {
          if (window.jQuery) {
            clearInterval(checkJQuery);
            console.log('✅ jQuery loaded');
            
            // Load other scripts after jQuery is available
            const scripts = [
              '/js/bootstrap.bundle.min.js',
              '/js/owl.carousel.min.js',
              '/js/jquery.magnific-popup.min.js',
              '/js/lc_lightbox.lite.js',
              '/js/bootstrap-select.min.js',
              '/js/jquery.dataTables.min.js',
              '/js/dataTables.bootstrap5.min.js',
              '/js/select.bootstrap5.min.js',
              '/js/dropzone.js',
              '/js/jquery.scrollbar.min.js',
              '/js/bootstrap-datepicker.js',
              '/js/swiper-bundle.min.js',
              '/js/custom.js'
            ];

            scripts.forEach(src => {
              const script = document.createElement('script');
              script.src = src;
              script.async = true;
              document.body.appendChild(script);
            });
          }
        }, 100);

        return () => clearInterval(checkJQuery);
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, []);

  return null;
};

// Main script provider component
const ScriptProvider = () => {
  return <ClientScriptLoader />;
};

export default ScriptProvider;
