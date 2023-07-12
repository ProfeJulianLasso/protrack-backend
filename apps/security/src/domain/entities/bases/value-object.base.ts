import { ValueObjectExceptionType } from '../../exceptions';

export abstract class ValueObjectBase<Type> {
  protected _error: ValueObjectExceptionType;

  constructor(public readonly value: Type) {}

  get error(): ValueObjectExceptionType {
    return this._error;
  }

  equal(valueObject: ValueObjectBase<Type>): boolean {
    return this.value === valueObject.value;
  }

  protected set error(error: ValueObjectExceptionType) {
    this._error = error;
  }

  isValid(): boolean {
    this.validate();
    return this.error ? false : true;
  }

  protected abstract validate(): void;
}
