import isEmpty from 'lodash/isEmpty';
import { Id, Name, MailAddress } from './vo';

export class User {
  // 完全コンストラクタパターン
  constructor(
    private _id: Id,
    private _name: Name,
    private _mailAddress: MailAddress,
  ) {}

  get id(): Id {
    return this._id;
  }

  get name(): Name {
    return this._name;
  }

  get mailAddress(): MailAddress {
    return this._mailAddress;
  }

  existsId(): boolean {
    return !isEmpty(this._id);
  }

  existsName(): boolean {
    return !isEmpty(this._name);
  }

  existsMailAddress(): boolean {
    return !isEmpty(this._name);
  }
}
