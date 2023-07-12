import { BooleanValueObjectBase } from '../../../bases';

const FIELD_NAME = 'state';

export class StateValueObject extends BooleanValueObjectBase {
  protected configure(): void {
    this.config = {
      fieldName: FIELD_NAME,
    };
  }
}
