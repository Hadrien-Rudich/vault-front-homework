import { CgArrowRightO, CgArrowLeftO } from 'react-icons/cg';
import type { TransactionResult } from '../../types/searchResult';

function Transaction(props: TransactionResult) {
  const { id, type, data } = props;

  return (
    <div
      key={id}
      className={`h-12 lg:px-6 md:px-2 px-1 flex items-center md:gap-10 gap-2 rounded-sm lg:text-lg md:text-sm text-xs  ${
        type === 'TRANSACTION_RECEIVED' ? 'bg-green-200' : 'bg-blue-200'
      }`}
    >
      <div className="sm:w-1/5 w-10">
        {type === 'TRANSACTION_RECEIVED' ? (
          <div className="flex items-center md:gap-6 gap-2">
            <CgArrowLeftO className="md:flex hidden lg:h-7 lg:w-7 h-5 w-5" />
            <p className="truncate">Received </p>
          </div>
        ) : (
          <div className="flex items-center md:gap-6 gap-2">
            <CgArrowRightO className="md:flex hidden lg:h-7 lg:w-7 h-5 w-5" />
            <p className="truncate">Sent </p>
          </div>
        )}
      </div>

      <div className="sm:w-1/5 w-10 sm:flex sm:flex-row flex-col items-center sm:gap-4 gap-1">
        <p className="w-1/2">{data.amount} </p>
        <p className="w-1/2"> {data.unit} </p>
      </div>

      <div className="lg:w-2/5 w-4/5 flex flex-col italic text-gray-600">
        {type === 'TRANSACTION_RECEIVED' ? (
          <div className="flex flex-col">
            <p>from:</p>
            <p className="truncate sm:w-full w-5/6">{data.from} </p>
          </div>
        ) : (
          <div className="flex flex-col">
            <p>to: </p>
            <p className="truncate sm:w-full w-5/6"> {data.to} </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Transaction;
