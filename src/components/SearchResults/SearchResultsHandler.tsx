// SearchResultHandler.js
import { MdSmsFailed } from 'react-icons/md';
import { FaQuestionCircle } from 'react-icons/fa';
import LoadingSpinner from '../LoadingSpinner';
import SearchResult from './SearchResult';
import type { SearchRes } from '../../types/searchResult';

interface Props {
  isLoading: boolean;
  results: SearchRes[] | null;
}

function SearchResultHandler({ isLoading, results }: Props) {
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
        <MdSmsFailed className="h-20 w-20 text-red-500" />
        <p className="absolute mt-48 p-1 text-lg text-red-500 text-center">
          Something went wrong. Please try again.
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <FaQuestionCircle className="h-16 w-16 text-yellow-500" />
        <p className="absolute mt-48 p-1 text-lg text-yellow-500 text-center">
          No result found. Please adjust your search.
        </p>
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
}

export default SearchResultHandler;
