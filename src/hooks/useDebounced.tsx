import { useState, useEffect } from 'react';

function useDebounce(text: string, delay: number) {
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedText(text);
    }, delay);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [text, delay]);

  return debouncedText;
}

export default useDebounce;
