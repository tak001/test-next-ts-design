import { completed, id, title, userId } from './vo';

export class Todo {
  constructor(
    private _id: id,
    private _title: title,
    private _userId: userId,
    private _completed: completed,
  ) {}

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get userId(): string {
    return this._userId;
  }

  get completed(): boolean {
    return this._completed;
  }
}
