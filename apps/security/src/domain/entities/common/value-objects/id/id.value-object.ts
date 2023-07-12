import { StringValueObjectBase } from '../../../bases';

const UUID_REGEX =
  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;

export class IdValueObject extends StringValueObjectBase {
  constructor(
    public readonly value: string,
    private readonly fieldName: string,
  ) {
    super(value);
  }

  protected configure(): void {
    this.config = {
      fieldName: this.fieldName,
      regex: UUID_REGEX,
      regexMessage: `${this.fieldName} is not valid uuid`,
    };
  }
}
