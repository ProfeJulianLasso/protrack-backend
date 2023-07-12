import { IdValueObject } from '../../../common';

const FIELD_NAME = 'userId';

export class UserIdValueObject extends IdValueObject {
  constructor(value: string) {
    super(value, FIELD_NAME);
  }
}
