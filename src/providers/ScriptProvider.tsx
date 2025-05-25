'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Declare jQuery type on window object
declare global {
  interface Window {
    jQuery: any;
  }
}

const ScriptProvider = () => {
  useEffect(() => {
    const loadScripts = async () => {
      try {
        // Wait for jQuery to be available
        const checkJQuery = setInterval(() => {
          if (typeof window !== 'undefined' && window.jQuery) {
            clearInterval(checkJQuery);
            console.log('✅ jQuery loaded');
          }
        }, 100);

        // Cleanup interval on unmount
        return () => clearInterval(checkJQuery);
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, []);

  return (
    <>
      <Script 
        src="/js/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script 
        src="/js/bootstrap.bundle.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/owl.carousel.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/jquery.magnific-popup.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/lc_lightbox.lite.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/bootstrap-select.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/jquery.dataTables.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/dataTables.bootstrap5.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/select.bootstrap5.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/dropzone.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/jquery.scrollbar.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/bootstrap-datepicker.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/swiper-bundle.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="/js/custom.js" 
        strategy="afterInteractive"
      />
    </>
  );
};

export default ScriptProvider;
