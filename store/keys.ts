export type RECOIL_ATOMS_KEYS_TYPE =
  typeof RECOIL_ATOMS_KEYS[keyof typeof RECOIL_ATOMS_KEYS];

export const RECOIL_ATOMS_KEYS = {
  TODO_STATE: 'atom/todo',
  USER_STATE: 'atom/user',
  PRODUCT_LIST_STATE: 'atom/productList',
} as const;

export const RECOIL_PERSIST_KEY = 'recoil-persist';
