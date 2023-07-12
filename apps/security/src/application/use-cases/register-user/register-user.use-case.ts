import {
  DomainException,
  IRegisterUserCommand,
  IUserRepository,
  RegisterUserValidator,
  SecurityAggregate,
  UserEntity,
} from '@security/domain';
import { IUseCaseBase } from '../interfaces';

export class RegisterUserUseCase implements IUseCaseBase {
  private aggregateRoot: SecurityAggregate;

  constructor(private readonly repository: IUserRepository) {
    this.aggregateRoot = new SecurityAggregate();
  }

  execute(command: IRegisterUserCommand): Promise<UserEntity> {
    const data = new RegisterUserValidator(command);
    if (!data.isValid()) throw new DomainException('Invalid data', data.errors);

    const user = new UserEntity({
      userId: data.id,
    });

    this.aggregateRoot.registerUser(user);

    return this.repository.create(user);
  }
}
