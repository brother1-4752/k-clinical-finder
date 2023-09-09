import { useEffect, useState, ReactNode } from 'react';

interface CustomSuspenseProps {
  fallback: ReactNode;
  maxDuration?: number;
  children: ReactNode;
}

export default function CustomSuspense({
  fallback,
  maxDuration,
  children,
}: CustomSuspenseProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, maxDuration);

    return () => clearTimeout(timer);
  }, [maxDuration]);

  return <>{isLoading ? children : fallback}</>;
}
