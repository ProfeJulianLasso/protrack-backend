import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RegisterUserUseCase } from '@security/application';
import { IUserRepository, UserEntity } from '@security/domain';
import { RegisterUserDto } from '../../dto';

@Controller()
export class CreateUserGateway {
  private readonly useCase: RegisterUserUseCase;

  constructor() {
    this.useCase = new RegisterUserUseCase({} as IUserRepository);
  }

  @GrpcMethod('SecurityService', 'CreateUser')
  createUser(data: RegisterUserDto): Promise<UserEntity> {
    return this.useCase.execute(data);
  }
}
