import { useState } from 'react';
import useDebounce from './hooks/useDebounced';
import useSearchResults from './hooks/useSearchResult';
import TextInput from './components/TextInput';
import LoadingSpinner from './components/LoadingSpinner';
import SearchResult from './components/SearchResults/SearchResult';

function App() {
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 300);
  const { isLoading, results } = useSearchResults(
    debouncedSearch.toUpperCase()
  );
  return (
    <div className="relative min-h-screen">
      <TextInput value={searchText} onChange={setSearchText} />
      {isLoading ? (
        <div className="absolute top-0 left-0 right-0 bottom-[20rem] flex justify-center items-center">
          <LoadingSpinner />
          <p className="text-2xl absolute text-white">Loading...</p>
        </div>
      ) : (
        results && (
          <div className=" mt-10 flex flex-col gap-1 w-full">
            {results.map((result) => (
              <SearchResult key={result.id} {...result} />
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default App;
