'use client';

import { createContext, useContext, useRef, ReactNode, useMemo } from 'react';

interface ScrollContextType {
  shopSectionRef: React.RefObject<HTMLElement>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { readonly children: ReactNode }) {
  const shopSectionRef = useRef<HTMLElement>(null);

  const value = useMemo(() => ({ shopSectionRef }), []);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollRef() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollRef must be used within ScrollProvider');
  }
  return context;
}


