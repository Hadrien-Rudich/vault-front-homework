import { CgAddR } from 'react-icons/cg';
import { AccountResult } from '../../types/searchResult';

function Account(props: AccountResult) {
  const { id, data } = props;

  return (
    <div
      key={id}
      className="h-12 lg:px-6 md:px-2 px-1 flex items-center md:gap-10 gap-2 rounded-sm lg:text-lg md:text-sm text-xs bg-white "
    >
      <div className="md:w-1/5 w-2/5">
        <div className="flex items-center gap-6">
          <CgAddR className="md:flex hidden lg:h-7 lg:w-7 h-5 w-5" />
          <p>Account Creation </p>
        </div>
      </div>
      <div className="md:w-1/5 w-2/5 flex items-center gap-6">
        <p> {data.name} </p>
      </div>
      <div className="md:w-1/5 w-2/5 flex">
        <p>{data.currency} </p>
      </div>
    </div>
  );
}

export default Account;
