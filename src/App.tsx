import { useState } from 'react';
import useDebounce from './hooks/useDebounced';
import useSearchResults from './hooks/useSearchResult';
import TextInput from './components/TextInput';

function App() {
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 300);
  const { isLoading, results } = useSearchResults(debouncedSearch);
  return (
    <div>
      <TextInput
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        results && (
          <div>
            {results.map((r) => (
              // TODO we must finalize this integration!! not very pretty like this
              <div key={r.id} className="border border-dashed">
                {JSON.stringify(r)}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default App;
