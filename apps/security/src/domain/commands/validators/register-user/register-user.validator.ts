import { UserIdValueObject } from '../../../entities';
import { ValidatorBase } from '../../bases';
import { IRegisterUserCommand } from '../../interfaces';

export class RegisterUserValidator extends ValidatorBase {
  id: UserIdValueObject;

  constructor(private data: IRegisterUserCommand) {
    super();
    this.id = new UserIdValueObject(data.id);
  }

  isValid(): boolean {
    if (this.id.isValid() === false) this.error = this.id.error;
    return super.isValid();
  }
}
