import { CgAddR } from 'react-icons/cg';
import { AccountResult } from '../../types/searchResult';

function Account(props: AccountResult) {
  const { id, data } = props;

  return (
    <div
      key={id}
      className="h-12 lg:px-6 md:px-2 px-1 flex items-center md:gap-10 gap-2 rounded-sm lg:text-lg md:text-sm text-xs bg-white "
    >
      <div className="sm:w-1/5 w-10">
        <div className="flex items-center md:gap-6 gap-2">
          <CgAddR className="md:flex hidden lg:h-7 lg:w-7 h-5 w-5" />
          <div className="flex flex-col items-center">
            <p className="truncate">Account </p>
            <p className="truncate">Creation </p>
          </div>
        </div>
      </div>
      <div className="sm:w-1/5 w-3/5 flex flex-col sm:items-left items-center">
        <p className="sm:w-3/5 w-3/5 "> {data.name} </p>
      </div>
      <div className="lg:w-3/5 sm:w-4/5 w-2/5 flex">
        <p>{data.currency} </p>
      </div>
    </div>
  );
}

export default Account;
