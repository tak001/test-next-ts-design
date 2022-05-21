import { KeyedMutator } from 'swr';

export interface SwrResponse<T> {
  data?: T;
  error?: any;
  mutate?: KeyedMutator<T>;
  isValidating?: boolean;
}
