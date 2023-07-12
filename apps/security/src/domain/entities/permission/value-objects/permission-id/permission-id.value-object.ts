import { IdValueObject } from '../../../common';

const FIELD_NAME = 'permissionId';

export class PermissionIdValueObject extends IdValueObject {
  constructor(value: string) {
    super(value, FIELD_NAME);
  }
}
