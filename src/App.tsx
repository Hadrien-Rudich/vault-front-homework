import { useState, KeyboardEvent } from 'react';
import useDebounce from './hooks/useDebounced';
import useSearchResults from './hooks/useSearchResult';
import SearchResultHandler from './components/SearchResults/SearchResultsHandler';
import TextInput from './components/TextInput';

function App() {
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 300);
  const { isLoading, results } = useSearchResults(
    debouncedSearch.toUpperCase()
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setSearchText('');
    }
  };

  return (
    <div className="relative min-h-screen">
      <TextInput
        value={searchText}
        onChange={setSearchText}
        onKeyDown={handleKeyDown}
      />
      <div className="mt-10">
        <SearchResultHandler isLoading={isLoading} results={results} />
      </div>
    </div>
  );
}

export default App;
