import { ConfigValueObjectBase } from './config-value-object.base';
import { ConfigBooleanType } from './types';

export abstract class BooleanValueObjectBase extends ConfigValueObjectBase<boolean> {
  protected validate(): void {
    this.configure();
    const { fieldName } = this.config as ConfigBooleanType;
    if ((this.value === true || this.value === false) === false)
      this.error = {
        field: fieldName,
        message: `${fieldName} is not valid`,
      };
  }
}
