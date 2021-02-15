import * as React from 'react';
import * as Fathom from 'fathom-client';
import { useLocation } from 'react-router';

function useFathom() {
  const location = useLocation();

  React.useEffect(() => {
    Fathom.load(window.ENV.FATHOM_ANALYTICS, {
      includedDomains: ['resume.mcan.sh'],
      url: 'https://kiwi.mcan.sh/script.js',
    });
  }, []);

  React.useEffect(() => {
    Fathom.trackPageview();
  }, [location.pathname]);
}

export { useFathom };
