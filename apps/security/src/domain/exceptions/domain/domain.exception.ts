import { ValueObjectExceptionType } from '../types';

export class DomainException extends Error {
  private _errors: ValueObjectExceptionType[];

  constructor(message: string, errors?: ValueObjectExceptionType[]) {
    super(message);
    if (errors) this._errors = errors;
  }

  get errors(): ValueObjectExceptionType[] {
    return this._errors;
  }
}
