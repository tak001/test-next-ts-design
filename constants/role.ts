// TODO: 本来はdomain層で定義。今は作っていないのでとりあえずここで
export type ROLE_TYPE = typeof ROLE[keyof typeof ROLE];

export const ROLE = {
  /** 専門家 */
  VIEWER: 'viewer',
  /** システム管理者 */
  ADMINISTRATOR: 'administrator',
} as const;
