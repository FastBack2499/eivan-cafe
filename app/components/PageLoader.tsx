'use client';

import { useState, useEffect } from 'react';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setIsLoaded(true);

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin h-10 w-10 border-t-4 border-green-500 rounded-full" />
      </div>
    );
  }

  return <>{children}</>;
}
