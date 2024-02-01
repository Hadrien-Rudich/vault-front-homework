import { useState } from 'react';
import { MdSmsFailed } from 'react-icons/md';
import { FaQuestionCircle } from 'react-icons/fa';

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

  const renderResults = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center">
          <LoadingSpinner />
          <p className="absolute text-2xl text-white">Loading...</p>
        </div>
      );
    }

    if (results === null) {
      return (
        <div className="flex justify-center items-center">
          <div
            className="absolute mt-48 p-1 text-lg
  text-red-500 text-center"
          >
            <p>Something went wront</p>
            <p>Please try again</p>
          </div>

          <MdSmsFailed className="h-20 w-20 text-red-500" />
        </div>
      );
    }

    if (results !== null && results.length === 0) {
      return (
        <div className="flex justify-center items-center">
          <div
            className="absolute mt-48 p-1 text-lg
    text-yellow-500 text-center"
          >
            <p>No result found</p>
            <p> Please adjust your search</p>
          </div>

          <FaQuestionCircle className="h-16 w-16  text-yellow-500" />
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-1 w-full">
        {results.map((result) => (
          <SearchResult key={result.id} {...result} />
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen">
      <TextInput value={searchText} onChange={setSearchText} />
      <div className="mt-10">{renderResults()}</div>
    </div>
  );
}

export default App;

//   }
//   return (
//     <div className="relative min-h-screen">
//       <TextInput value={searchText} onChange={setSearchText} />
//       {isLoading ? (
//         <div className="absolute top-0 left-0 right-0 bottom-[20rem] flex justify-center items-center">
//           <LoadingSpinner />
//           <p className="text-2xl absolute text-white">Loading...</p>
//         </div>
//       ) : (
//         results.length && (
//           <div className=" mt-10 flex flex-col gap-1 w-full">
//             {results.map((result) => (
//               <SearchResult key={result.id} {...result} />
//             ))}
//           </div>
//         )
//       )}
//     </div>
//   );
// }
