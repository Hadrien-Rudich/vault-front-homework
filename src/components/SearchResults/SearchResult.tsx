import type {
  SearchResult,
  TransactionResult,
  AccountResult,
} from '../../types/searchResult';
import Transaction from './Transaction';
import Account from './Account';

function Notification(props: SearchResult) {
  const isTransactionResult = (
    searchResult: SearchResult
  ): searchResult is TransactionResult => {
    return (
      searchResult.type === 'TRANSACTION_RECEIVED' ||
      searchResult.type === 'TRANSACTION_SENT'
    );
  };

  const isAccountResult = (
    searchResult: SearchResult
  ): searchResult is AccountResult => {
    return searchResult.type === 'ACCOUNT_CREATED';
  };

  const determineType = () => {
    if (isTransactionResult(props)) {
      return <Transaction {...props} />;
    }
    if (isAccountResult(props)) {
      return <Account {...props} />;
    }

    return null;
  };

  return <div>{determineType()}</div>;
}

export default Notification;
