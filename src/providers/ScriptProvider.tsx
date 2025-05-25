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
    // Initialize any scripts that need to run after page load
    const initializeScripts = () => {
      if (typeof window !== 'undefined' && window.jQuery) {
        // Initialize any jQuery plugins here
        console.log('✅ Core bootstrap scripts loaded');
      }
    };

    // Wait for jQuery to be available
    const checkJQuery = setInterval(() => {
      if (typeof window !== 'undefined' && window.jQuery) {
        clearInterval(checkJQuery);
        initializeScripts();
      }
    }, 100);

    return () => {
      clearInterval(checkJQuery);
    };
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
