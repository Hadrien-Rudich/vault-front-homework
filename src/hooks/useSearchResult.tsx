import { useState, useEffect } from 'react';
import type { SearchRes } from '../types/searchResult';
import fetchSearchResults from '../services/apiServices';

function useSearchResults(searchText: string) {
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | SearchRes[]>(null);

  useEffect(() => {
    let isMounted = true;

    const loadAndFetch = async () => {
      setLoading(true);

      try {
        const data = await fetchSearchResults(searchText);

        if (isMounted) {
          setResults(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadAndFetch();

    return () => {
      isMounted = false;
    };
  }, [searchText]);

  return { isLoading, results };
}

export default useSearchResults;
