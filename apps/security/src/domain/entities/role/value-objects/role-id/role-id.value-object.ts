import { IdValueObject } from '../../../common';

const FIELD_NAME = 'roleId';

export class RoleIdValueObject extends IdValueObject {
  constructor(value: string) {
    super(value, FIELD_NAME);
  }
}
