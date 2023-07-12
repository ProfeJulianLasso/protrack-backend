import { ConfigValueObjectBase } from './config-value-object.base';
import { ConfigStringType } from './types';

export abstract class StringValueObjectBase extends ConfigValueObjectBase<string> {
  protected validate(): void {
    this.configure();
    const { fieldName, minLength, maxLength, regex, regexMessage } = this
      .config as ConfigStringType;
    if (
      minLength &&
      maxLength &&
      (this.value.length < minLength || this.value.length > maxLength)
    )
      this.error = {
        field: fieldName,
        message: `${fieldName} is min ${minLength} and max ${maxLength} characters`,
      };
    else if (minLength && this.value.length < minLength)
      this.error = {
        field: fieldName,
        message: `${fieldName} is min ${minLength} characters`,
      };
    else if (maxLength && this.value.length > maxLength)
      this.error = {
        field: fieldName,
        message: `${fieldName} is max ${maxLength} characters`,
      };
    else if (regex && regex.test(this.value) === false)
      this.error = {
        field: fieldName,
        message: regexMessage
          ? regexMessage
          : `${fieldName} is not valid string`,
      };
  }
}
