export interface BaseResult {
  id: string;
  type: string;
}
export interface TransactionSpecific {
  id: number;
  amount: number;
  unit: string;
  from: string;
  to: string;
}
export interface TransactionResult extends BaseResult {
  data: TransactionSpecific;
}
export interface AccountSpecific {
  id: number;
  name: string;
  currency: string;
}
export interface AccountResult extends BaseResult {
  data: AccountSpecific;
}

export type SearchRes = TransactionResult | AccountResult;
