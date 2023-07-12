import { ValueObjectExceptionType } from '../../exceptions';

export abstract class ValidatorBase {
  private _errors: ValueObjectExceptionType[];

  constructor() {
    this._errors = [];
  }

  get errors(): Array<ValueObjectExceptionType> {
    return this._errors;
  }

  protected set error(error: ValueObjectExceptionType) {
    this._errors.push(error);
  }

  isValid(): boolean {
    return this._errors.length === 0 ? true : false;
  }
}
